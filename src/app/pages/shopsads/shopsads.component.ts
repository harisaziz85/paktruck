import { Component } from '@angular/core';

@Component({
  selector: 'app-shopsads',
  templateUrl: './shopsads.component.html',
  styleUrl: './shopsads.component.css'
})
export class ShopsadsComponent {
  myads = [
     {
      desc:'Lorem ipsum dolor sit amet',
      name: 'Damper',
      price: 'PKR 7,500,000',
      image: 'images/shopstruck.png',
      location: 'Lahore',
      lastupdate: '1 minute ago',
      submitbtn:'Contact Us',
      details: ['10 tons', 'Yellow', 'New'],
    },
  ];
  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
}
