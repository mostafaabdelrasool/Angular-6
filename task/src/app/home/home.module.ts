import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  imports: [
    CommonModule,ChatModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
