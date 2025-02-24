import { Component } from '@angular/core';

@Component({
  selector: 'app-dumptruck',
  standalone: false,
  
  templateUrl: './dumptruck.component.html',
  styleUrl: './dumptruck.component.css'
})
export class DumptruckComponent {
  usedtrucks = [
    { name: 'Damper', location: 'lahore', image: 'images/spare.png' },
    { name: 'Wooden', location: 'lahore', image: 'images/spare2.png' },
    { name: 'Flatbed', location: 'lahore', image: 'images/spare3.png' },
    { name: 'Tanker', location: 'lahore', image: 'images/spare4.png' },
  ];
}
