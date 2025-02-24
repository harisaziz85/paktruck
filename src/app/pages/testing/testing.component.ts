import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../core/models/vehicle-ads';

@Component({
  selector: 'app-testing',
  standalone: false,
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css']
})
export class TestingComponent implements OnInit {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';
  adDetails: VehicleAd | null = null;

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchTrucks();
  }

  fetchTrucks(): void {
    this.adService.getAds().subscribe({
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



  // Method to fetch details of a specific ad
  viewDetails(adId: string): void {
    this.adService.getAdDetailsById(adId).subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.adDetails = response.data;
          console.log('Ad Details:', this.adDetails); // You can display this in your HTML
        }
      },
      error: (error) => {
        console.error('Error fetching ad details:', error);
      }
    });
  }
}
