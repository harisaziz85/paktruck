import { Component } from '@angular/core';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrl: './detailpage.component.css'
})
export class DetailpageComponent {
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
      ttile:'Toyota Corolla',
      price: '1000',
      button:'COntact us',
      description:'high quality oem replacement front bumper'
    },
   
   
  ];
  sellerdetails=[
    {
      seller:'Varified',
      Dealer:'Pak Truck Karachi',
      Address:'234567',
          
    }
  ];
}
