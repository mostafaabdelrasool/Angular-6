import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ChatModule } from './chat/chat.module';
import { ChatRoutes } from './chat/chat.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { MapModule } from './map/map.module';
import { MapRoutes } from './map/map.routing';
import { HomeRoutes } from './home/home.routing';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot([]),
    ChatModule,ChatRoutes, HttpClientModule,MapModule,
    MapRoutes,HomeRoutes,HomeModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
