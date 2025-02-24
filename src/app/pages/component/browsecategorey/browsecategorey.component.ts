import { Component } from '@angular/core';

@Component({
  selector: 'app-browsecategorey',
  templateUrl: './browsecategorey.component.html',
  styleUrls: ['./browsecategorey.component.css'], // Fixes typo: 'styleUrl' -> 'styleUrls'
})
export class BrowsecategoreyComponent {
  menuItems = [
    { label: 'Used Truck', section: 'usedtruck' },
    { label: 'Earth Moving Machine', section: 'earthmovingmachine' },
    { label: 'Used Buses', section: 'usedbuses' },
    { label: 'Agricultural Machinery', section: 'earthmovingmachine' },
    { label: 'Spare parts', section: 'spareparts' },
  ];
  
  activeSection: string = '';

setActive(section: string): void {
  this.activeSection = section;
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
}

}
