import { Component, OnInit } from '@angular/core';
import {ApploadService} from '../../modules/services/appload.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  settings: any;
  currentUrl: string;
  businessName: string;
  brandstyle: string;

  constructor(appLoadService: ApploadService) {
    console.log('BEGIN: ChildComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    const lowerCaseBusinessName = this.businessName.toLowerCase();
    this.brandstyle = '../assets/${lowerCaseBusinessName}/app.component.css';
    console.log('mystyle = ' + this.brandstyle);
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: AppComponent.constructor()');
  }

  ngOnInit() {
  }

}
