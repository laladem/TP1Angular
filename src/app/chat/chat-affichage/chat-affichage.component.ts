import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../models/message';
import {ChatElementComponent} from '../chat-element/chat-element.component';

@Component({
  selector: 'app-chat-affichage',
  templateUrl: './chat-affichage.component.html',
  styleUrls: ['./chat-affichage.component.scss']
})
export class ChatAffichageComponent implements OnInit {
  @Input() messages: Array<Message>;

  constructor() { }

  ngOnInit() {
  }

}
