import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse, User } from '../models/user';
import { baseURL } from '../constants/base.url';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${baseURL}auth/signInEmail`, { email, password }).pipe(
      tap((response) => {
        if (response.token && this.isBrowser()) {
          this.saveToken(response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      })
    );
  }

  signup(userData: any): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(`${baseURL}auth/sign-up-email-web`, userData);
  }

  sendOtp(email: string): Observable<{ success: boolean; message: string; otp?: string }> {
    return this.http.post<{ success: boolean; message: string; otp?: string }>(
      `${baseURL}auth/send-email-otp`,
      { email }
    );
  }

  sendOTPMobile(phone: string): Observable<{ success: boolean; message: string; otp?: string }> {
    return this.http.post<{ success: boolean; message: string; otp?: string }>(
      `${baseURL}auth/send-phone-otp`,
      { phone }
    );
  }

  verifyOTP(phone: string, otp: string): Observable<{ success: boolean; message: string }> {
    return this.http.post<{ success: boolean; message: string }>(
      `${baseURL}auth/verify-phone-otp`,
      { identifier: phone, otp }
    );
  }

  signupWithGoogle(): Observable<{ redirectUrl: string }> {
    return this.http.get<{ redirectUrl: string }>(`${baseURL}auth/google`);
  }

  logoutUser(): Observable<any> {
    return this.http.post<any>(`${baseURL}auth/user-signout`, {});
  }

  getUserId(): string | null {
    if (this.isBrowser()) {
      const user = JSON.parse(localStorage.getItem('user') || '{}');
      return user?._id || null;
    }
    return null;
  }

  forgotPassword(email: string): Observable<{ status: boolean; message: string }> {
    return this.http.post<{ status: boolean; message: string }>(
      `${baseURL}auth/forgot-password`,
      { email }
    );
  }

  resetPassword(email: string, verificationCode: string, newPassword: string): Observable<{ status: boolean; message: string }> {
    return this.http.post<{ status: boolean; message: string }>(
      `${baseURL}auth/reset-password`,
      { email, verificationCode, newPassword }
    );
  }

  logout(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }

  saveToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }

  getUser(): User | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
  
}
