import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent {

  searchQuery: string = '';

  activeDropdown: string | null = null;

  filters = [
    {
      label: 'City',
      key: 'city',
      options: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'],
    },
    {
      label: 'Province',
      key: 'province',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
  
    {
      label: 'Make',
      key: 'make',
      options: ['Toyota', 'Honda', 'Suzuki', 'Nissan'],
    },
    {
      label: 'Price Range',
      key: 'priceRange',
      options: ['Under 5 Lakh', '5-10 Lakh', '10-20 Lakh', 'Above 20 Lakh'],
    },
    {
      label: 'Year',
      key: 'year',
      options: ['2020', '2021', '2022', '2023'],
    },
    {
      label: 'Mileage (km)',
      key: 'year',
      options: ['2020', '2021', '2022', '2023'],
    },
    {
      label: 'Registered In',
      key: 'register in',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      label: 'Transmission',
      key: 'transmission',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      label: 'Color',
      key: 'color',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      label: 'Engine Type',
      key: 'enginetype',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      label: 'Engine Capacity (cc)',
      key: 'enginecapacity',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      label: 'Body Type',
      key: 'bodytype',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      
      label: 'Model Category',
      key: 'modelcategory',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      
      label: 'Picture Availability',
      key: 'pictureavailability',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      
      label: 'Video Availability',
      key: 'videoavailability',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
    {
      
      label: 'Add Type',
      key: 'addtype',
      options: ['Punjab', 'Sindh', 'KPK', 'Balochistan','Gilgit'],
    },
  ];

  // Stores selected options for each filter
  selectedOptions: { [key: string]: string[] } = {};

  // Search by keyword functionality
  searchByKeyword() {
    console.log('Search Query:', this.searchQuery);
    console.log('Selected Filters:', this.selectedOptions);
    // Perform search logic here...
  }

  // Toggles the dropdown visibility
  toggleDropdown(key: string) {
    this.activeDropdown = this.activeDropdown === key ? null : key;
  }

  // Toggles the selection of an option
  onOptionToggle(filterKey: string, option: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (!this.selectedOptions[filterKey]) {
      this.selectedOptions[filterKey] = [];
    }

    if (isChecked) {
      this.selectedOptions[filterKey].push(option);
    } else {
      this.selectedOptions[filterKey] = this.selectedOptions[filterKey].filter(
        (selectedOption) => selectedOption !== option
      );
    }

    console.log(`Filter: ${filterKey}, Selected Options:`, this.selectedOptions[filterKey]);
  }

  // Checks if an option is selected
  isSelected(filterKey: string, option: string): boolean {
    return this.selectedOptions[filterKey]?.includes(option) ?? false;
  }
}