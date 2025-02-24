import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router'; // Import Router service

@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.css']
})
export class LoginPhoneComponent {
  phoneForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router  // Inject Router service
  ) {
    // Reactive form setup
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10), Validators.pattern('^[0-9]*$')]]
    });
  }

  // Submit function for sending OTP
  sendOTP() {
    if (this.phoneForm.invalid) {
      alert('Please enter a valid phone number');
      return;
    }

    // Get the phone number from the form input
    const phone = this.phoneForm.get('phone')?.value;

    // Add the country code (+92) to the phone number and store the full number in localStorage
    const fullPhone = `+92${phone}`;
    localStorage.setItem('phone', fullPhone);  // Store the full phone number for verification

    this.authService.sendOTPMobile(fullPhone).subscribe({
      next: (response) => {
        if (response.success) {
          alert(response.message);  // OTP sent success message
          // Redirect to OTP verification page
          this.router.navigate(['/auth/mobile-code-varification']);
        } else {
          alert(response.message || 'Failed to send OTP');  // Error message
        }
      },
      error: (err) => {
        alert(err.error.message || 'An error occurred');  // Error in API call
      }
    });
  }
}
