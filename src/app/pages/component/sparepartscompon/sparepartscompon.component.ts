import { Component } from '@angular/core';

@Component({
  selector: 'app-sparepartscompon',
  templateUrl: './sparepartscompon.component.html',
  styleUrl: './sparepartscompon.component.css'
})
export class SparepartscomponComponent {
  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
}
