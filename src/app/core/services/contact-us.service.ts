import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export const baseURL = "http://44.211.61.175/api/";

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
  constructor(private http: HttpClient) { }

  sendContactForm(formData: any): Observable<any> {
    return this.http.post(`${baseURL}/users/contact-us`, formData);
  }
}
