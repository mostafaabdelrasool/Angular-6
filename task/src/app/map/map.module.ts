import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map.component';

@NgModule({
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDdwjhji8Iu-KXYzUYc2hhr6DNtuPzEXFE'
    })
  ],
  declarations: [ MapComponent ],
})
export class MapModule { }
