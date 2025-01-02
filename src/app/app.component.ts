import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'y';
  constructor(public router:Router){}
  shouldShowNewsletter(): boolean {
    // Hide newsletter for 'login' and 'signup' routes
    return !['/auth/login', '/auth/signup', '/auth/phone-login', '/auth/mobile-code-varification','/auth/forget-password','/auth/forget-password-varification','/auth/new-password','/auth/varification'].includes(this.router.url);
  }
shouldappdownload(): boolean {
  // Hide newsletter for 'login' and 'signup' routes
  return !['/auth/login', '/auth/signup', '/auth/phone-login', '/auth/mobile-code-varification','/auth/forget-password','/auth/forget-password-varification','/auth/new-password','/auth/varification'].includes(this.router.url);
  }
shouldnavbar(): boolean {
  // Hide newsletter for 'login' and 'signup' routes
  return !['/auth/login', '/auth/signup', '/auth/phone-login', '/auth/mobile-code-varification','/auth/forget-password','/auth/forget-password-varification','/auth/new-password','/auth/varification'].includes(this.router.url);
  }
shouldfooter(): boolean {
  // Hide newsletter for 'login' and 'signup' routes
  return !['/auth/login', '/auth/signup', '/auth/phone-login', '/auth/mobile-code-varification','/auth/forget-password','/auth/forget-password-varification','/auth/new-password','/auth/varification'].includes(this.router.url);
  }
shouldtopbar(): boolean {
  // Hide newsletter for 'login' and 'signup' routes
  return !['/auth/login', '/auth/signup', '/auth/phone-login', '/auth/mobile-code-varification','/auth/forget-password','/auth/forget-password-varification','/auth/new-password','/auth/varification'].includes(this.router.url);
  }
}
