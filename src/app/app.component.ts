import { Component } from '@angular/core';

import { APP_SETTINGS } from './settings/settings';

import {ApploadService} from './services/appload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appload Demo';
  settings: any;

 constructor(appLoadService: ApploadService) {
   this.settings = appLoadService.getPreLoadedSettings();
   }
}
