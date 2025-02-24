import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service'; // Import the AuthService
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-mobile-varification',
  templateUrl: './mobile-varification.component.html',
  styleUrls: ['./mobile-varification.component.css']
})
export class MobileVarificationComponent {
  otpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router // Inject Router service
  ) {
    // Initialize the form group with 6 controls for OTP inputs
    this.otpForm = this.fb.group({
      otp1: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp2: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp3: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp4: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp5: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
      otp6: ['', [Validators.required, Validators.pattern('^[0-9]$')]],
    });
  }

  // Submit function to handle OTP submission
  submitOTP() {
    if (this.otpForm.invalid) {
      alert('Please enter the full OTP');
      return;
    }

    // Combine OTP inputs into a single string
    const otp = Object.values(this.otpForm.value).join('');
    const phone = localStorage.getItem('phone'); // Retrieve the stored phone number (including +92)

    if (!phone) {
      alert('No phone number found for verification');
      return;
    }

    // Make the verification API call with the correct payload structure
    this.authService.verifyOTP(phone, otp).subscribe({
      next: (response) => {
        if (response.success) {
          alert('OTP Verified successfully!');
          // Redirect to the next page after successful OTP verification
          this.router.navigate(['/home']);  // Example redirection after success
        } else {
          alert(response.message || 'Failed to verify OTP');
        }
      },
      error: (err) => {
        alert(err.error.message || 'An error occurred while verifying OTP');
      }
    });
  }
}
