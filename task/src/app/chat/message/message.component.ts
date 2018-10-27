import { Component, OnInit, Input } from '@angular/core';
import { ChatMesssage } from 'src/app/model/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() message: ChatMesssage;
  constructor() { }

  ngOnInit() {
  }

}
