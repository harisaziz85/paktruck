import { Component } from '@angular/core';
import { VehicleAdsService } from '../../../core/services/vehicle-ads.service';
@Component({
  selector: 'app-freezertruck',
  standalone: false,
  
  templateUrl: './freezertruck.component.html',
  styleUrl: './freezertruck.component.css'
})
export class FreezertruckComponent {
 
   flatBedTrucks: any[] = [];
   
     constructor(private adService: VehicleAdsService) {}
   
     ngOnInit(): void {
       this.fetchFlatBedTrucks();
     }
   
     fetchFlatBedTrucks(): void {
       this.adService.getAds().subscribe({
         next: (response) => {
           console.log('API Response:', response); // Debugging line
   
           if (response.status === 'success' && response.data) {
             this.flatBedTrucks = response.data
               .filter(ad => {
                 console.log('Ad Category:', ad.category, 'Ad SubCategory:', ad.subCategory); // Debugging line
   
                 return (
                   ad.category?.trim().toLowerCase() === 'used truck' && // Corrected category
                   ad.subCategory?.trim().toLowerCase() === 'freezer truck' // Corrected subcategory
                 );
               })
               .map(ad => ({
                 name: ad.adType || 'Unknown',
                 location: ad.location || 'Location not available',
                 subCategory: ad.subCategory || 'Subcategory not available',
                 image: ad.images && ad.images.length > 0 ? ad.images[0] : 'assets/default-image.png'
               }));
   
             console.log('Final Flat Bed Trucks:', this.flatBedTrucks); // Debugging line
           }
         },
         error: (error) => {
           console.error('Error fetching flat bed truck ads:', error);
         }
       });
     }
  }
  

