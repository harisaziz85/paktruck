import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user: User | null = null;
  verificationLink: string = '/profile/varification'; // Default link

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUser(); // Fetch user data

    if (this.user) {
      // Redirect based on user type
      this.verificationLink = this.user.type === 'shop' ? '/auth/shop-varification' : '/auth/individual-varification';
    }
  }
}
