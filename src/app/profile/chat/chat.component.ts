import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'] // Note the correct plural: "styleUrls"
})
export class ChatComponent {
  messages: { user: string; text: string; type: string; status: string }[] = [
    { user: '', text: 'Hello!', type: 'sent', status: 'read' },
    { user: '', text: 'Hi! How are you?', type: 'received', status: '' },
  ];

  newMessage: string = '';

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Push a new message with initial status 'sent'
      this.messages.push({ user: '', text: this.newMessage, type: 'sent', status: 'sent' });
      this.newMessage = '';

      // Simulate delivery and read statuses
      setTimeout(() => {
        const lastMessage = this.messages[this.messages.length - 1];
        if (lastMessage.type === 'sent') {
          lastMessage.status = 'delivered'; // Update status to 'delivered'

          // Simulate message read
          setTimeout(() => {
            lastMessage.status = 'read'; // Update status to 'read'
          }, 1000);
        }
      }, 1000);

      // Simulate a reply
      setTimeout(() => {
        this.messages.push({ user: 'Alice', text: 'Got your message!', type: 'received', status: '' });
      }, 2000);
    }
  }
}
