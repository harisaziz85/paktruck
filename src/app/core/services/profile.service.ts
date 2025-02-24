import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile, VerificationResponse } from '../models/profile';
import { baseURL } from '../constants/base.url';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  // Get User Profile
  getUserProfile(): Observable<{ status: string; data: { user: Profile } }> {
    return this.http.get<{ status: string; data: { user: Profile } }>(`${baseURL}profile`);
  }

  // Update User Profile (Submit Verification)
  updateProfile(profileData: FormData): Observable<VerificationResponse> {
    return this.http.post<VerificationResponse>(`${baseURL}profile/edit-profile`, profileData);
  }
}
