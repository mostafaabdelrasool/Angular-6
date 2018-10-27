import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat/chat.service';
import { ChatMesssage } from '../model/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lastMessage:ChatMesssage;
  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.lastMessage=this.chatService.getLastMessage();
  }

}
