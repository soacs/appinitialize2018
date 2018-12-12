import { Component, OnInit } from '@angular/core';
import {ApploadService} from '../../modules/appload/services/appload.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  settings: any;
  currentUrl: string;
  businessName: string;
  brandCssUrl: string;
  ngClass: string;
  myStyle: any;
  ngStyle: string;

  constructor(appLoadService: ApploadService) {
    console.log('BEGIN: ChildComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    this.ngClass = this.settings.ngClass;
    this.ngStyle = this.settings.ngStyle;
    console.log('this.ngStyle = ' + this.ngStyle);
    const tempVar = '{' + this.ngStyle + '}';
    this.myStyle = JSON.parse(tempVar);
    console.log('this.myStyle = ' + this.myStyle);
    this.brandCssUrl = appLoadService.getBrandCssUrl();
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: ChildComponent.constructor()');
  }

  ngOnInit() {
  }

  getStyle(): any {
    return this.myStyle;
  }

}
