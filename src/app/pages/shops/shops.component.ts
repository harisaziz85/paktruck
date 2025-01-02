import { Component } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css'
})
export class ShopsComponent {
  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  usedtrucks = [
    { name: 'Damper', location: 'lahore', image: 'images/spare.png' },
    { name: 'Wooden', location: 'lahore', image: 'images/spare2.png' },
    { name: 'Flatbed', location: 'lahore', image: 'images/spare3.png' },
    { name: 'Tanker', location: 'lahore', image: 'images/spare4.png' },
  ];
}
