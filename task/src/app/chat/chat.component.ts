import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';
import { ChatMesssage } from '../model/message';
import { AppService } from '../app.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Array<ChatMesssage>;
  message$:Observable<ChatMesssage>;
  constructor(public chatService: ChatService, private appService: AppService) {
    this.messages = [];
    chatService.messageChange.subscribe(x => {
      this.messages.push(x);
    });
  }

  ngOnInit() {
    this.messages.push(...this.chatService.getMessages(0));
  }
  sendMessage(message) {
    if (!message.value) {
      return;
    }
    this.chatService.sendMessage(message.value)
    message.value = '';
  }
}
