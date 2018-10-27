import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';
import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ChatComponent,MessageComponent],
  providers:[ChatService],
  exports:[MessageComponent]
})
export class ChatModule { }
