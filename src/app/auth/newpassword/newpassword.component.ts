import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-newpassword',
  templateUrl: './newpassword.component.html',
  styleUrls: ['./newpassword.component.css']
})
export class NewpasswordComponent {
  newPasswordForm: FormGroup;
  isLoading = false;
  message: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.newPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      verificationCode: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.newPasswordForm.invalid) {
      return;
    }

    const { email, verificationCode, newPassword } = this.newPasswordForm.value;

    this.isLoading = true;

    this.authService.resetPassword(email, verificationCode, newPassword).subscribe(
      response => {
        this.isLoading = false;
        if (response.status) {
          this.message = 'Password reset successful.';
        } else {
          this.message = response.message || 'Something went wrong.';
        }
      },
      error => {
        this.isLoading = false;
        this.message = 'An error occurred. Please try again.';
      }
    );
  }
}
