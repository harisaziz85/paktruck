import { Component } from '@angular/core';

@Component({
  selector: 'app-adview',
  templateUrl: './adview.component.html',
  styleUrls: ['./adview.component.css']
})
export class AdviewComponent {
  truckdetails = [
    {
      name: 'Truck Swift DLX Automatic 1.3 2014',
      price: 'PKR, 22 Lac',
      description: 'Lorem ipsum dolor sit amet consectetur. Consectetur fames sed massa faucibus congue lectus massa. Platea.',
      features: [
        '<i class="fa-solid fa-calendar-days"></i> 2024',
        '<i class="fa-solid fa-road"></i> 103,950 km',
        '<i class="fa-solid fa-gas-pump"></i> Petrol',
        '<i class="fa-solid fa-gear"></i> Automatic',
      ],
      truckfeatures: [
        '<i class="fa-solid fa-shield"></i> ABS', // Anti-lock Braking System
        '<i class="fa-solid fa-snowflake"></i> Air Conditioning', // Air Conditioning
        '<i class="fa-solid fa-key"></i> Immobilizer Key', // Immobilizer Key
        '<i class="fa-solid fa-car-side"></i> Power Mirrors',
        '<i class="fa-solid fa-radio"></i> AM/FM Radio', // Radio
        '<i class="fa-solid fa-ring"></i> Alloy Rims', // Alloy Rims
        '<i class="fa-solid fa-unlock"></i> Keyless Entry', // Keyless Entry
        '<i class="fa-solid fa-cogs"></i> Power Steering', // Power Steering
        '<i class="fa-solid fa-user-shield"></i> Air Bags', // Air Bags
        '<i class="fa-solid fa-compact-disc"></i> CD Player', // CD Player
        '<i class="fa-solid fa-lock"></i> Power Locks', // Power Locks
        '<i class="fa-solid fa-window-maximize"></i> Power Windows', // Power Windows
      ],
      
      brand: 'Hino Pakistan',
      model: 'Hino Pakistan',
      color: 'Green',
      register: 'Sindh',
      bodyType: 'N/A',
      engineCapacity: '1000 cc',
      assembly: 'Imported',
    }
  ];
  sellerdetails=[
    {
      detail:'Varified Seller',price:'22 Lac',address:'Suit No : 303 Third Floor Tariq Centre Main Tariq Road',comment:'Best Truck in World its speed and range is very fast and its level is super high.. 100% original. Fully maintained through authorized dealership. All service history log maintained. The Truck has duplicate book. Non accidental. File is duplicate. Original number plates are not available. All taxes paid Mention PakWheels.com when calling Seller to get a good deal',
      
  
    }
  ];
  relatedads=[
    {
      image:'images/adsimage.png',
      name:'Truck Name',
      price:'PKR 16,999',
      location:'Islamabad'
    },
    {
      image:'images/adsimage.png',
      name:'Truck Name',
      price:'PKR 16,999',
      location:'Islamabad'
    },
    {
      image:'images/adsimage.png',
      name:'Truck Name',
      price:'PKR 16,999',
      location:'Islamabad'
    },
    {
      image:'images/adsimage.png',
      name:'Truck Name',
      price:'PKR 16,999',
      location:'Islamabad'
    }
  ];
  columns: string[][] = [];

  ngOnInit(): void {
    this.columns = this.splitIntoColumns(this.truckdetails[0].truckfeatures, 4);
  }

  splitIntoColumns(features: string[], itemsPerColumn: number): string[][] {
    const columns: string[][] = [];
    for (let i = 0; i < features.length; i += itemsPerColumn) {
      columns.push(features.slice(i, i + itemsPerColumn));
    }
    return columns;
  }
}
