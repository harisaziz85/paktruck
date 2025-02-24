import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userForm: FormGroup;
  isPasswordVisible: boolean = false;
  otpMessage: string = '';
  isLoading = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      otp: ['', Validators.required], // OTP field added
      password: ['', Validators.required],
      accountMode: ['individual', Validators.required],
      shopCategory: [''],
    });

    this.userForm.get('accountMode')?.valueChanges.subscribe((value) => {
      if (value === 'shop') {
        this.userForm.get('shopCategory')?.setValidators(Validators.required);
      } else {
        this.userForm.get('shopCategory')?.clearValidators();
      }
      this.userForm.get('shopCategory')?.updateValueAndValidity();
    });
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  sendOtp() {
    this.isLoading = true;
    const email = this.userForm.get('email')?.value;

    if (email) {
      this.authService.sendOtp(email).subscribe({
        next: (response) => {
          this.otpMessage = response.message;
          this.toastr.success('OTP sent successfully!', 'Success');
          this.isLoading = false;
        },
        error: (err) => {
          this.otpMessage = 'Failed to send OTP';
          this.toastr.error('Failed to send OTP. Try again!', 'Error');
          this.isLoading = false;
        }
      });
    }
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = { ...this.userForm.value };

      // Remove shopCategory if accountMode is "individual"
      if (formData.accountMode === 'individual') {
        delete formData.shopCategory;
      }

      this.authService.signup(formData).subscribe({
        next: (response) => {
          console.log('Signup Successful:', response);
          this.toastr.success('Signup successful!', 'Success');
          this.router.navigate(['/auth/login']); // Redirect to login page
        },
        error: (err) => {
          console.error('Signup Error:', err);
          this.toastr.error('Signup failed! Please try again.', 'Error');
        }
      });
    } else {
      this.toastr.warning('Please fill in all required fields.', 'Warning');
    }
  }

  // Handle Google signup
  signupWithGoogle() {
    window.location.href = 'http://44.211.61.175/api/auth/google';
  }
}
