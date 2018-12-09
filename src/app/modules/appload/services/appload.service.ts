import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_SETTINGS} from '../../../settings/settings';
import {environment} from '../../../../environments/environment';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable()
export class ApploadService {
  currentURL: string;

  constructor(private httpClient: HttpClient,  public sanitizer: DomSanitizer) {
    console.log('BEGIN: ApploadService.constructor()');
    this.currentURL = window.location.href;
    console.log('currentURL = ' + this.currentURL);

    console.log('EXIT: ApploadService.constructor()');
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise anonymous function`);
      console.log(`Call mapUserURLtoSettingsURL()`);
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
    const settingsUrl = this.mapUserURLtoSettingsURL(this.currentURL);
    console.log(`Call web service API to get settings...`);
    const promise = this.httpClient.get(settingsUrl)
      .toPromise()
      .then(settings => {
        console.log(`Settings returned from web service API: `, settings);
        APP_SETTINGS.connectionString = settings[0].value;
        APP_SETTINGS.defaultImageUrl = settings[1].value;
        APP_SETTINGS.businessName = settings[2].value;
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
    const businessName = currentUrl.substr(indexOfEqual);
    console.log(`businessName: ` + businessName);
    return businessName;
  }

  mapUserURLtoSettingsURL(url: string): string {
    return 'http://angularorange.io/json/settings.json';
  }
}
