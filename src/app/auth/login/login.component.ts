import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        localStorage.setItem('user', JSON.stringify(response.user));

        setTimeout(() => {  
          console.log("Token before navigating:", localStorage.getItem('token'));

          // ✅ Role-based redirection
          if (response.user.role === 'individual') {
            this.router.navigate(['/home']);
          } else if (response.user.role === 'shop') {
            this.router.navigate(['/blog']);
          } else {
            this.router.navigate(['']); // Default route
          }
        }, 300);  
      },
      error: () => {
        this.errorMessage = 'Invalid email or password';
      }
    });
  }
}
