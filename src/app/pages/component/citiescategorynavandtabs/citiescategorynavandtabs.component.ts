import { Component } from '@angular/core';
import { VehicleAdsService } from '../../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../../core/models/vehicle-ads';

@Component({
  selector: 'app-citiescategorynavandtabs',
  templateUrl: './citiescategorynavandtabs.component.html',
  styleUrl: './citiescategorynavandtabs.component.css'
})
export class CitiescategorynavandtabsComponent {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';
  adDetails: VehicleAd | null = null;

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchAllAds();
  }

  // Function to fetch all ads
  fetchAllAds(): void {
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

}

