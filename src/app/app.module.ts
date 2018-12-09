import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ApploadModule} from './modules/appload/appload.module';
import {AppComponent} from './components/application/app.component';
import {RouterModule, Routes} from '@angular/router';
import {Child2Component} from './components/child2/child2.component';
import {Child3Component} from './components/child3/child3.component';
import { Child1Component } from './components/child1/child1.component';

const appRoutes: Routes = [
  {path: 'child1', component: Child1Component},
  {
    path: 'child2', component: Child2Component,
    children: [
      {path: '', component: Child3Component},
      {path: 'child3', component: Child3Component}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Child2Component,
    Child3Component,
    Child1Component
  ],
  imports: [
    BrowserModule,
    ApploadModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    ApploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
