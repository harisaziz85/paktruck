import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  user: User | null = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  onLogout(): void {
    this.authService.logoutUser().subscribe(
      response => {
        console.log('User logged out successfully');
        this.authService.logout(); // Remove user data from localStorage
        this.user = null; // Clear the user data from the component
      },
      error => {
        console.error('Logout failed:', error);
      }
    );
  }
}