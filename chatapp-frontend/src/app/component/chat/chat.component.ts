import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChatMessage} from "../../model/chat.message";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  chatMessage: ChatMessage = new ChatMessage("Vince", "Hello, World!");

  constructor() { }

  ngOnInit(): void {
  }


  sendMessage(sendForm: NgForm) {
    console.log(sendForm.value);
  }

}
