import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehicleAd } from '../models/vehicle-ads';
import { baseURL } from '../constants/base.url';

@Injectable({
  providedIn: 'root'
})
export class VehicleAdsService {

  constructor(private http: HttpClient) { }

  // Get all vehicle ads
  getAds(): Observable<{ status: string; data: VehicleAd[] }> {
    return this.http.get<{ status: string; data: VehicleAd[] }>(`${baseURL}vehicle-ad/all`);
  }

  // Get my ads (only ads posted by the current user)
  getMyAds(): Observable<{ status: string; data: VehicleAd[] }> {
    return this.http.get<{ status: string; data: VehicleAd[] }>(`${baseURL}vehicle-ad/my-ads`);
  }

  // Get ad details by ID
  getAdDetailsById(adId: string): Observable<{ status: string; data: VehicleAd }> {
    return this.http.get<{ status: string; data: VehicleAd }>(`${baseURL}vehicle-ad/get-ad-details/Vehicle/${adId}`);
  }

  // Create a new ad
  createAd(ad: VehicleAd | FormData): Observable<{ status: string; message: string; data: VehicleAd }> {
    console.log("Sending API request...");
    return this.http.post<{ status: string; message: string; data: VehicleAd }>(`${baseURL}vehicle-ad/create`, ad);
  }

  // Mark an ad as sold
  markAsSold(adId: string): Observable<{ status: string; data: VehicleAd }> {
    return this.http.put<{ status: string; data: VehicleAd }>(`${baseURL}vehicle-ad/mark-as-sold/${adId}`, {});
  }

  // Update an existing ad
  updateAd(adId: string, ad: VehicleAd): Observable<{ status: string; data: VehicleAd }> {
    return this.http.put<{ status: string; data: VehicleAd }>(`${baseURL}vehicle-ad/${adId}`, ad);
  }

  // Remove an ad
  removeAd(adId: string): Observable<{ status: string; data: any }> {
    return this.http.delete<{ status: string; data: any }>(`${baseURL}vehicle-ad/${adId}`);
  }

  // Share an ad (possibly via a link or social sharing functionality)
  shareAd(adId: string): Observable<{ status: string; data: any }> {
    return this.http.get<{ status: string; data: any }>(`${baseURL}vehicle-ad/share/${adId}`);
  }

  // Save or remove from favorites
  toggleFavorite(adId: string): Observable<{ status: string; message: string }> {
    return this.http.post<{ status: string; message: string }>(
      `${baseURL}profile/favorites/toggleFavorite`,
      { itemId: adId, adType: 'Vehicle' }  // Ensure correct payload
    );
  }

  // Get favorite ads
  getFavoriteAds(): Observable<{ status: string; data: VehicleAd[] }> {
    return this.http.get<{ status: string; data: VehicleAd[] }>(`${baseURL}profile/favorites`);
  }



  // Get videos related to an ad
  getVideos(adId: string): Observable<{ status: string; data: string[] }> {
    return this.http.get<{ status: string; data: string[] }>(`${baseURL}vehicle-ad/videos/${adId}`);
  }
}
