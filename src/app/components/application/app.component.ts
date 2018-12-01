import {Component, OnInit} from '@angular/core';
import {APP_SETTINGS} from '../../settings/settings';
import {ApploadService} from '../../modules/appload/services/appload.service';
import {DomSanitizer} from '@angular/platform-browser';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Appload Demo';
  settings: any;
  currentUrl: string;
  businessName: string;
  brandCssUrl: any;

  constructor(public appLoadService: ApploadService, public sanitizer: DomSanitizer) {
    console.log('BEGIN: AppComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    this.brandCssUrl = appLoadService.getBrandCssUrl();
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: AppComponent.constructor()');
  }

  ngOnInit() {
  }
}

