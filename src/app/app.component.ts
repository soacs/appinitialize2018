import { Component } from '@angular/core';
import { APP_SETTINGS } from './settings/settings';
import {ApploadService} from './services/appload.service';

let mystyle = '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ ]
})
export class AppComponent {
  title = 'Appload Demo';
  settings: any;
  currentUrl: string;
  businessName: string;

 constructor(appLoadService: ApploadService) {
   console.log('BEGIN: AppComponent.constructor()');
   this.settings = appLoadService.getPreLoadedSettings();
   this.businessName = this.settings.businessName;
   const lowerCaseBusinessName = this.businessName.toLowerCase();
   mystyle = '../assets/' + lowerCaseBusinessName + '/app.component.css';
   console.log('mystyle = ' + mystyle);
   this.currentUrl = appLoadService.getCurrentURL();
   console.log('EXIT: AppComponent.constructor()');
   }
}
