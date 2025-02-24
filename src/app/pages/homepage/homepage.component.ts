import { Component } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  truckOptions: string[] = ['All Truck', 'Truck 1', 'Truck 2'];
  priceOptions: string[] = ['Price Range', 'Under $10,000', '$10,000 - $20,000'];

  filteredTruckOptions: string[] = [...this.truckOptions];
  filteredPriceOptions: string[] = [...this.priceOptions];

  filterOptions(searchText: string, options: string[]): string[] {
    return options.filter((option) =>
      option.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  onTruckOptionSelect(truck: string): void {
    console.log('Selected Truck:', truck);
  }

  onPriceOptionSelect(price: string): void {
    console.log('Selected Price:', price);
  }

  onTruckSearchChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filteredTruckOptions = this.filterOptions(inputValue, this.truckOptions);
  }

  onPriceSearchChange(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filteredPriceOptions = this.filterOptions(inputValue, this.priceOptions);
  }
}
