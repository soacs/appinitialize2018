import { Component, OnInit } from '@angular/core';
import {ApploadService} from '../../modules/appload/services/appload.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  settings: any;
  currentUrl: string;
  businessName: string;
  brandCssUrl: string;

  constructor(appLoadService: ApploadService) {
    console.log('BEGIN: ChildComponent.constructor()');
    this.settings = appLoadService.getPreLoadedSettings();
    this.businessName = this.settings.businessName;
    this.brandCssUrl = appLoadService.getBrandCssUrl();
    this.currentUrl = appLoadService.getCurrentURL();
    console.log('EXIT: ChildComponent.constructor()');
  }

  ngOnInit() {
  }

}
