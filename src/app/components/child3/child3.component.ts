import { Component, OnInit } from '@angular/core';
import {ApploadService} from '../../modules/appload/services/appload.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  settings: any;
  currentUrl: string;
  businessName: string;
  brandCssUrl: string;
  primaryColor: string;
  secondaryColor: string;

  constructor(appLoadService: ApploadService) {
    console.log('BEGIN: ChildComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    this.primaryColor = this.settings.primaryColor;
    this.secondaryColor = this.settings.secondaryColor;
    this.brandCssUrl = appLoadService.getBrandCssUrl();
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: ChildComponent.constructor()');
  }

  ngOnInit() {
  }

}
