import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClickerButtonComponent } from './clicker-button/clicker-button.component';
import { ViewerPanelComponent } from './viewer-panel/viewer-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickerButtonComponent,
    ViewerPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
