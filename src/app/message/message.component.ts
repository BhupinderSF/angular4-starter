import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
    selector: 'app-messages',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css'],
    providers: []
})

export class MessageComponent{
    constructor(public messageService: MessageService) {}
}