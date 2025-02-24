import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../core/models/vehicle-ads';

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrl: './myads.component.css'
})
export class MyadsComponent {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';
  adDetails: VehicleAd | null = null;

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchTrucks();
  }

  fetchTrucks(): void {
    this.adService.getMyAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.ads = response.data;
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load ads';
        console.error('Error fetching ads:', error);
        this.loading = false;
      }
    });
  }


  toggleFavorite(adId: string) {
    this.adService.toggleFavorite(adId).subscribe({
      next: (response) => {
        console.log('Favorite status updated:', response.message);
      },
      error: (error) => {
        console.error('Error updating favorite status:', error);
      }
    });
  }


}
