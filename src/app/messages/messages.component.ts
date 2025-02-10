import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {}

}
