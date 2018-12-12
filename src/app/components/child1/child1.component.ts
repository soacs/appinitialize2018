import { Component, OnInit } from '@angular/core';
import {ApploadService} from '../../modules/appload/services/appload.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  settings: any;
  currentUrl: string;
  businessName: string;
  brandCssUrl: string;
  ngClass; string;
  ngStyle: string;

  constructor(appLoadService: ApploadService) {
    console.log('BEGIN: ChildComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    this.ngClass = this.settings.ngClass;
    this.ngStyle = this.settings.ngStyle;
    this.brandCssUrl = appLoadService.getBrandCssUrl();
    this.currentUrl = appLoadService.getCurrentURL();


    console.log('EXIT: ChildComponent.constructor()');
  }

  ngOnInit() {
  }

}
