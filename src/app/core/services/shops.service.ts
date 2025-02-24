import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/base.url';
import { Shops } from '../models/shops'; // Ensure the correct interface name is used

@Injectable({
  providedIn: 'root'
})
export class ShopsService {
  constructor(private http: HttpClient) {}

  getShops(): Observable<Shops[]> {  // Define return type as an array of Shop
    return this.http.get<Shops[]>(`${baseURL}users/shops`);
  }
}
