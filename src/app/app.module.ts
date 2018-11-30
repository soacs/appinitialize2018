import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApploadModule } from './modules/appload/appload.module';
import { AppComponent } from './components/application/app.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    ApploadModule
  ],
  exports: [
    ApploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
