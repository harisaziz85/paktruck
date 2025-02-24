import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropdown1 = [
    { name: 'Sell Truck', link: 'adsupload/vehicle-ad-upload' },
    { name: 'Sell Busses', link: 'adsupload/sell-busses' },
    { name: 'Sell Spare Parts', link: 'adsupload/spare-parts-upload' }
  ];
  
  dropdownState: { [key: string]: boolean } = {
    dropdown1: false
  };

  constructor(private eRef: ElementRef) {}

  toggleDropdown(dropdown: string) {
    this.dropdownState[dropdown] = !this.dropdownState[dropdown];
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.dropdownState = { dropdown1: false }; // Close dropdown
    }
  }
}
