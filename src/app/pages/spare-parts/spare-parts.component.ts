import { Component } from '@angular/core';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrl: './spare-parts.component.css'
})
export class SparePartsComponent {
  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];

  cabinParts = [
    { name: 'Loader Cabin', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Excavator Cabin', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Bedford', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Isuzu', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  chassis = [
    { name: 'Loader Cabin', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Excavator Cabin', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Bedford', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Isuzu', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  tube = [
    { name: 'Loader Cabin', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Excavator Cabin', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Bedford', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Isuzu', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  trunion = [
    { name: 'Bedford', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Isuzu', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
}
