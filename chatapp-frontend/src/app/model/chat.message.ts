export class ChatMessage {
  user: string;
  message: string;

  constructor(user: string, message: string) {
    this.message = message;
    this.user = user;
  }
}
