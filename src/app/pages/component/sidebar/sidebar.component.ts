import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input() filters: { [key: string]: string[] } = {}; // Proper typing for filters
  @Output() filtersChanged = new EventEmitter<{ [key: string]: string[] }>();
  activeDropdown: string | null = null;
  selectedOptions: { [key: string]: string[] } = {};

  emitSelectedFilters() {
    this.filtersChanged.emit(this.selectedOptions);
  }

  toggleDropdown(key: string) {
    this.activeDropdown = this.activeDropdown === key ? null : key;
  }

  onOptionToggle(filterKey: string, option: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked; 

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

    this.emitSelectedFilters(); // Emit selected filters after updating
  }

  isSelected(filterKey: string, option: string): boolean {
    return this.selectedOptions[filterKey]?.includes(option) ?? false;
  }
}
