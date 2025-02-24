import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../core/models/vehicle-ads';
@Component({
  selector: 'app-saveads',
  templateUrl: './saveads.component.html',
  styleUrl: './saveads.component.css'
})
export class SaveadsComponent {
  favoriteAds: VehicleAd[] = [];
  loading = true;
  errorMessage = '';

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchFavoriteAds();
  }

  fetchFavoriteAds(): void {
    this.adService.getFavoriteAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.favoriteAds = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load favorite ads';
        console.error('Error fetching favorite ads:', error);
        this.loading = false;
      }
    });
  }
}
