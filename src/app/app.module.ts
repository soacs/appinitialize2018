import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApploadModule } from './modules/appload/appload.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
