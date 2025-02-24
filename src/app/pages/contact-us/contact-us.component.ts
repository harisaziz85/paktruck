import { Component } from '@angular/core';
import { ContactUsService } from '../../core/services/contact-us.service';
import { ContsctUs } from '../../core/models/contsct-us';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: ContsctUs= {
    fullname: '',
    email: '',
    mobileNumber: '',
    subject: '',
    message: ''
  };

  isPopupVisible = false; // Controls popup visibility
  isLoading = false; // Show loading state

  constructor(private contactService: ContactUsService) {}

  // Show popup
  openPopup(): void {
    this.isPopupVisible = true;
  }

  // Handle button clicks from the popup
  handleAction(action: string): void {
    console.log('Selected Action:', action); // Logs 'individual' or 'shop'
    this.isPopupVisible = false; // Close popup
  }

  // Submit form
  onSubmit(): void {
    if (this.contactForm.fullname && this.contactForm.email && this.contactForm.mobileNumber && this.contactForm.subject && this.contactForm.message) {
      this.isLoading = true;
      this.contactService.sendContactForm(this.contactForm).subscribe({
        next: (response) => {
          console.log('Form submitted successfully:', response);
          alert('Your message has been sent successfully!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
          alert('Something went wrong. Please try again.');
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Reset form after submission
  resetForm(): void {
    this.contactForm = {
      fullname: '',
      email: '',
      mobileNumber: '',
      subject: '',
      message: ''
    };
  }
}
