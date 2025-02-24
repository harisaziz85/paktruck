import { Component } from '@angular/core';
import { VehicleAd } from '../../core/models/vehicle-ads';
import { ActivatedRoute } from '@angular/router';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailpageComponent {
  adId: string | null = null;
  adDetails!: VehicleAd; // Holds ad details

  constructor(
    private route: ActivatedRoute,
    private vehicleAdsService: VehicleAdsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.adId = params.get('adId'); // Get adId from URL
      if (this.adId) {
        this.getAdDetails(this.adId);
      }
    });
  }


  getAdDetails(adId: string): void {
    this.vehicleAdsService.getAdDetailsById(adId).subscribe({
      next: (response) => {
        this.adDetails = response.data; // Store the fetched ad data
      },
      error: (err) => {
        console.error('Error fetching ad details:', err);
      }
    });
  }

  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  washers = [
    {
      id: 1,
      type: 'Gas',
      image: 'assets/gas-washer.png',
      description: 'Honda-powered gas pressure washer with durable design.',
    },

  ];

  parts = [
    {
      id: 1,
      image: 'assets/part1.png',
    },
    {
      id: 2,
      image: 'assets/part2.png',
    },
    {
      id: 3,
      image: 'assets/part3.png',
    },
    {
      id: 4,
      image: 'assets/part4.png',
    },
  ];
  details = [
    {
      ttile: 'Toyota Corolla',
      price: '1000',
      button: 'COntact us',
      description: 'high quality oem replacement front bumper'
    },


  ];
  sellerdetails = [
    {
      seller: 'Varified',
      Dealer: 'Pak Truck Karachi',
      Address: '234567',

    }
  ];
}
