import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_SETTINGS} from '../../../settings/settings';
import {environment} from '../../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';
import {AppSettings} from '../settings';

@Injectable()
export class ApploadService {
  currentURL: string;
  appSettings: AppSettings;
  businessName = 'default';

  constructor(private httpClient: HttpClient,  public sanitizer: DomSanitizer) {
    console.log('BEGIN: ApploadService.constructor()');
    this.currentURL = window.location.href;
    console.log('currentURL = ' + this.currentURL);

    console.log('EXIT: ApploadService.constructor()');
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise anonymous function`);
      setTimeout(() => {
        console.log(`initializeApp:: inside setTimeout that is inside promise - ready to resolve`);
        // doing something
        resolve();
      }, 3000);
    });
  }

  getSettings(): Promise<any> {
    console.log(`ENTER getSettings()`);
    // map user URL to settings location URL (diferent business has different settings
    // http://angularorange.io/json/settings.json
    const businessName = this.getBusinessName(this.currentURL);
    const apiUrl = this.getAPIUrl(businessName);
    console.log(`apiUrl = ` + apiUrl);
    const settingsUrl = this.mapCurrentUrltoSettingsApiUrl(this.currentURL);
    console.log(`Call web service API to get settings...`);
    const promise = this.httpClient.get(settingsUrl)
      .toPromise()
      .then(settings => {
        console.log(`Settings returned from web service API: `, settings);
        this.appSettings = <AppSettings>settings;
        console.log(`typeof: `, typeof settings);
        APP_SETTINGS.businessName = this.appSettings.businessName;
        APP_SETTINGS.connectionString = this.appSettings.connectionString;
        APP_SETTINGS.defaultImageUrl = this.appSettings.defaultImageUrl;
        APP_SETTINGS.primaryColor = this.appSettings.primaryColor;
        APP_SETTINGS.secondaryColor = this.appSettings.secondaryColor;
        APP_SETTINGS.ngClass = this.appSettings.ngClass;
        APP_SETTINGS.ngStyle = this.appSettings.ngStyle;
        console.log(`APP_SETTINGS: `, APP_SETTINGS);
        return settings;
      });
    console.log(`EXIT getSettings() - returning promise`);
    return promise;
  }

  getPreLoadedSettings() {
    console.log(`ENTER getPreLoadedSettings()`);
    console.log(`EXIT getPreLoadedSettings() - returning APP_SETTINGS`);
    return APP_SETTINGS;
  }

  getBrandCssUrl(): any {
    const lowerCaseBusinessName = APP_SETTINGS.businessName.toLowerCase();
    const brandCss = `${environment.brandDir}${lowerCaseBusinessName}-brand.css`;
    console.log(`brandCss = ${brandCss}`);

    const t0 = console.time('sanitizer');
    const brandCssUrl = this.sanitizer.bypassSecurityTrustResourceUrl(brandCss);
    const t1 = console.timeEnd('sanitizer');

    console.log(`brandCssUrl = ${brandCssUrl}`);
    return brandCssUrl;
  }

  getCurrentURL() {
    console.log(`ENTER getCurrentURL()`);
    console.log(`EXIT getCurrentURL()`);
    return this.currentURL;
  }

  getBusinessName(currentUrl: string) {
    const indexOfEqual = currentUrl.lastIndexOf('=');
    console.log(`indexOfEqual: ` + indexOfEqual);
    if (indexOfEqual >= 0) {
      this.businessName = currentUrl.substr(indexOfEqual + 1);
    }
    console.log(`businessName: ` + this.businessName);
    return this.businessName;
  }

  getAPIUrl(businessName: string): string {
    // return 'http://angularorange.io/json/settings.json';
    return environment.apiUrl + businessName;
  }

  mapCurrentUrltoSettingsApiUrl(currentUrl: string): string {
    const businessName = this.getBusinessName(currentUrl);
    const apiUrl = this.getAPIUrl(businessName);
    return apiUrl;
  }

}
