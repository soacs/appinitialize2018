import {Component} from '@angular/core';
import {APP_SETTINGS} from '../../settings/settings';
import {ApploadService} from '../../modules/services/appload.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appload Demo';
  settings: any;
  currentUrl: string;
  businessName: string;
  brandCss: string;
  brandCssUrl: any;

  constructor(appLoadService: ApploadService, public sanitizer: DomSanitizer) {
    console.log('BEGIN: AppComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    const lowerCaseBusinessName = this.businessName.toLowerCase();
    this.brandCss = `../assets/${lowerCaseBusinessName}/brand.css`;
    this.brandCssUrl = sanitizer.bypassSecurityTrustResourceUrl(this.brandCss);
    console.log('mystyle = ' + this.brandCssUrl);
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: AppComponent.constructor()');
  }
}
