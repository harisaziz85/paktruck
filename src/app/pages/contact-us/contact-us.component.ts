import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  isPopupVisible = false; // Controls popup visibility

  // Show popup
  openPopup(): void {
    this.isPopupVisible = true;
  }

  // Handle button clicks from the popup
  handleAction(action: string): void {
    console.log('Selected Action:', action); // Logs 'individual' or 'shop'
    this.isPopupVisible = false; // Close popup
  }
}
