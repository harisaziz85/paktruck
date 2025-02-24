import { Component, OnInit } from '@angular/core';
import { VehicleAdsService } from '../../../core/services/vehicle-ads.service';

@Component({
  selector: 'app-compactormachine',
  templateUrl: './compactormachine.component.html',
  styleUrls: ['./compactormachine.component.css'],
})
export class CompactormachineComponent implements OnInit {
  usedtrucks: any[] = [];

  constructor(private vehicleAdsService: VehicleAdsService) {}

  ngOnInit(): void {
    this.vehicleAdsService.getAds().subscribe((response) => {
      if (response.status === 'success') {
        this.usedtrucks = response.data
          .filter((item: any) => 
            item.category === 'Earth Moving Machinery' || item.subCategory === 'Compactor Machine'
          )
          .map((item: any) => ({
            name: item.subCategory || 'Unknown',
            location: item.location || 'Unknown',
            image: item.images.length > 0 ? item.images[0] : 'assets/default.png',
          }));
      }
    });
    
  }
}
