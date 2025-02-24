import { Component } from '@angular/core';

@Component({
  selector: 'app-paktruckmanage',
  templateUrl: './paktruckmanage.component.html',
  styleUrl: './paktruckmanage.component.css'
})
export class PaktruckmanageComponent {
  bodyParts = [
    { name: 'Damper', price: 'PKR 7,500,000',city:'Islamabad', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000',city:'Islamabad', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000',city:'Islamabad', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000',city:'Islamabad', image: 'images/spare4.png' },
  ];
}
