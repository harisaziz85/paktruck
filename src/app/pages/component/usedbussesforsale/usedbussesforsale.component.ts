import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../../core/models/vehicle-ads';

@Component({
  selector: 'app-usedbussesforsale',
  standalone: false,
  templateUrl: './usedbussesforsale.component.html',
  styleUrls: ['./usedbussesforsale.component.css']
})
export class UsedbussesforsaleComponent implements OnInit {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';

  constructor(private adService: VehicleAdsService) {}

  ngOnInit(): void {
    this.fetchBuses();
  }

  fetchBuses(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          // Filter ads for buses only
          this.ads = response.data.filter(ad => ad.category === 'Used_Buses' && ad.subCategory === 'busses');
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load bus ads';
        console.error('Error fetching bus ads:', error);
        this.loading = false;
      }
    });
  }
}
