import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../../core/services/vehicle-ads.service';


@Component({
  selector: 'app-dumpertruck',
  templateUrl: './dumpertruck.component.html',
  styleUrls: ['./dumpertruck.component.css']
})
export class DumpertruckComponent implements OnInit {
  dumperTrucks: any[] = [];

  constructor(private adService: VehicleAdsService) {}

  ngOnInit(): void {
    this.fetchDumperTrucks();
  }

  fetchDumperTrucks(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        console.log('API Response:', response); // Debugging line
  
        if (response.status === 'success' && response.data) {
          this.dumperTrucks = response.data
            .filter(ad => {
              console.log('Ad Category:', ad.category, 'Ad SubCategory:', ad.subCategory); // Debugging line
  
              return (
                ad.category?.trim().toLowerCase() === 'used truck' && // Corrected category
                ad.subCategory?.trim().toLowerCase() === 'dump truck' // Corrected subcategory
              );
            })
            .map(ad => ({
              name: ad.adType || 'Unknown',
              location: ad.location || 'Location not available',
              subCategory: ad.subCategory || 'Subcategory not available', // Corrected field
              image: ad.images && ad.images.length > 0 ? ad.images[0] : 'assets/default-image.png'
            }));
  
          console.log('Final Dumper Trucks:', this.dumperTrucks); // Debugging line
        }
      },
      error: (error) => {
        console.error('Error fetching dumper truck ads:', error);
      }
    });
  }
  
  
  
}
