// In forget-pass.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {
  message: string = '';
  isLoading = false;
  forgetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    // In forget-pass.component.ts
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

  }

  onSubmit(): void {
    if (this.forgetPasswordForm.invalid) return;

    this.isLoading = true;
    const email = this.forgetPasswordForm.value.email;

    this.authService.forgotPassword(email).subscribe(
      response => {
        this.isLoading = false;
        this.message = response.message;
      },
      error => {
        this.isLoading = false;
        this.message = 'Something went wrong. Please try again later.';
      }
    );
  }
}
