import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {APP_SETTINGS} from '../../settings/index';

@Injectable()
export class ApploadService {
  currentURL: string;

  constructor(private httpClient: HttpClient) {
    console.log('BEGIN: ApploadService.constructor()');
    this.currentURL = window.location.href;
    console.log('currentURL = ' + this.currentURL);
    console.log('EXIT: ApploadService.constructor()');
  }

  initializeApp(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(`initializeApp:: inside promise anonymous function`);
      console.log(`Call mapUserURLtoSettingsURL()`);
      // map user URL to settings location URL (diferent business has different settings
      this.mapUserURLtoSettingsURL(this.currentURL);
      setTimeout(() => {
        console.log(`initializeApp:: inside setTimeout that is inside promise - ready to resolve`);
        // doing something
        resolve();
      }, 3000);
    });
  }

  getSettings(): Promise<any> {
    console.log(`ENTER getSettings()`);
    console.log(`Call web service API to get settings...`);
    const promise = this.httpClient.get('http://angularorange.io/json/settings.json')
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

  getCurrentURL() {
    console.log(`ENTER getCurrentURL()`);
    console.log(`EXIT getCurrentURL()`);
    return this.currentURL;

  }

  mapUserURLtoSettingsURL(url: string) {
    // dummy implementation
  }
}
