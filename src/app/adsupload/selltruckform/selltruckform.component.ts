import { Component } from '@angular/core';

@Component({
  selector: 'app-selltruckform',
  templateUrl: './selltruckform.component.html',
  styleUrl: './selltruckform.component.css'
})
export class SelltruckformComponent {
  searchQuery: string = ''; // Search ke liye variable
  cities: string[] = [
    'Karachi DHA',
    'Kohat Banu road',
    'Peshawar Hayatabad',
    'Islamabad G11',
    'Lahore Sector 9',
    'Abbottabad Sector 3'
  ]; // Dropdown ke liye data
  selectedCities: { [key: string]: boolean } = {}; 
  checkboxes = [
    { id: 'ABS', label: 'ABS', checked: false },
    { id: 'AM/FM Radio', label: 'AM/FM Radio', checked: false },
    { id: 'Air Bags', label: 'Air Bags', checked: false },
    { id: 'Air Conditioning', label: 'Air Conditioning', checked: false },
    { id: ' Alloy Rims', label: ' Alloy Rims ', checked: false },
    { id: 'CD Player', label: 'Keyless Entry', checked: false },
    { id: 'Power Mirrors', label: 'Power Mirrors', checked: false },
    { id: 'Power Windows', label: 'Power Windows', checked: false },
    { id: 'Power Locks', label: 'Power Locks', checked: false },
    { id: 'Immobilizer Key', label: 'Immobilizer Key', checked: false }
  ];
}
