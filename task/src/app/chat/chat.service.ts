import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatMesssage } from '../model/message';
import { AppService } from '../app.service';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ChatService {

    messages: Array<ChatMesssage>;
    messageChange = new Subject<ChatMesssage>();
    constructor(private http: HttpClient, private appService: AppService) {
        this.messages = [{
            id: 2,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Maryam",
        }, {
            id: 3,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 1,
            createdByUserName: "Anni",
        }, {
            id: 4,
            messageText: "How r u ?",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Maryam",
        }, {
            id: 5,
            messageText: "I am fine",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Anni",
        }, {
            id: 6,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 1,
            createdByUserName: "Maryam",
        }, {
            id: 7,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Anni",
        }, {
            id: 6,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 1,
            createdByUserName: "Maryam",
        }, {
            id: 7,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Anni",
        }, {
            id: 8,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 1,
            createdByUserName: "Maryam",
        }, {
            id: 9,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Anni",
        }, {
            id: 10,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 1,
            createdByUserName: "Maryam",
        }, {
            id: 11,
            messageText: "Hello",
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: 2,
            createdByUserName: "Anni",
        }];
    }
    getMessages(pageNum): Array<ChatMesssage> {
        var result = this.messages.slice(pageNum * 5,
            (pageNum + 1) * 5);
            this.messageChange.next(result[0]);
        return result;
    }
    sendMessage(message: string) {
        let messageData = {
            id: 2,
            messageText: message,
            createdDate: new Date(),
            modifiedDate: new Date(),
            createdByUserId: this.appService.user.Id,
            createdByUserName: this.appService.user.name,
        };
        this.messages.push(messageData);
        return this.messageChange.next(messageData);

    }
    getLastMessage(): ChatMesssage {
        if (this.messages.length===0) {
            return null;
        }
        return this.messages[this.messages.length-1]
    }
}
