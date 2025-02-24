import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../core/services/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  user: any = {}; // Holds user data
  selectedFile: File | null = null; // Holds the uploaded file

  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit() {
    this.loadUserProfile();
  }

  // Fetch user data and populate form fields
  loadUserProfile() {
    this.profileService.getUserProfile().subscribe(
      (response) => {
        if (response.status === 'success') {
          this.user = response.data.user;
        }
      },
      (error) => {
        console.error('Error fetching profile:', error);
      }
    );
  }

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0]; // Get selected file
    if (file) {
      this.user.profileImage = file; // Store file reference
    }
  }


  // Save changes, update profile with picture, and navigate to /home
  saveChanges() {
    const formData = new FormData();

    // Append text fields
    formData.append('fullname', this.user.fullname);
    formData.append('country', this.user.country);
    formData.append('city', this.user.city);
    formData.append('shopName', this.user.shopName);
    formData.append('email', this.user.email);
    formData.append('phone', this.user.phone);

    // Append file if selected
    if (this.user.profileImage) {
      formData.append('profileImage', this.user.profileImage);
    }

    this.profileService.updateProfile(formData).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
        this.router.navigate(['/home']); // Navigate after update
      },
      (error) => {
        console.error('Error updating profile:', error);
      }
    );
  }
  

}
