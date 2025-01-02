import { Component } from '@angular/core';

@Component({
  selector: 'app-forget-code-varification',
  templateUrl: './forget-code-varification.component.html',
  styleUrl: './forget-code-varification.component.css'
})
export class ForgetCodeVarificationComponent {
  showModal = false;  // Controls the visibility of the modal

  openConfirmationModal() {
    this.showModal = true;  // Show the modal
  }

  closeModal() {
    this.showModal = false;  // Close the modal
  }

  resendCode() {
    // Implement your logic to resend the verification code here
    console.log("Verification code resent!");
    this.showModal = false;  // Close modal after resend
  }
}
