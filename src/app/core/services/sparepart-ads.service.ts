import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SparepartAds } from '../models/sparepart-ads';
import { baseURL } from '../constants/base.url';

@Injectable({
  providedIn: 'root'
})
export class SparepartAdsService {
  private apiUrl = `${baseURL}sparepart-ad/create`;  // Endpoint for creating spare part ads

  constructor(private http: HttpClient) {}

  createSparePartAd(adData: SparepartAds): Observable<any> {
    const formData = new FormData();
    formData.append('category', adData.category);
    formData.append('location', adData.location);
    formData.append('price', adData.price.toString());
    formData.append('condition', adData.condition);
    formData.append('description', adData.description);
    formData.append('adType', adData.adType);
    formData.append('postedBy', adData.postedBy);

    // Append image files if available
    adData.images.forEach((file, index) => {
      formData.append(`images`, file);
    });
    
    return this.http.post<any>(this.apiUrl, formData);
  }
}