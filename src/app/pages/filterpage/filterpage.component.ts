import { Component } from '@angular/core';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../core/models/vehicle-ads';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrl: './filterpage.component.css'
})
export class FilterpageComponent {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';
  filteredAds: VehicleAd[] = [];
  filters: any = {};

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchAllAds();
  }

  fetchAllAds(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.ads = response.data;
          this.filteredAds = this.ads; // Initially show all ads
          this.extractFilters(); // Extract filters based on ads
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load ads';
        console.error('Error fetching ads:', error);
        this.loading = false;
      }
    });
  }

  extractFilters(): void {
    const uniqueCities = [...new Set(this.ads.map(ad => ad.location))];
    const uniqueMakes = [...new Set(this.ads.map(ad => ad.make))];
    const uniqueModels = [...new Set(this.ads.map(ad => ad.modelYear))];
    const uniquePricerange = [...new Set(this.ads.map(ad => ad.price))];
    const uniquecategorey = [...new Set(this.ads.map(ad => ad.category))];
    const uniqueregisteredin = [...new Set(this.ads.map(ad => ad.registeredIn))];
    const uniqueadtype = [...new Set(this.ads.map(ad => ad.adType))];
    const uniquepictureavailibility = [...new Set(this.ads.map(ad => ad.images))];




    // Define the filters structure
    this.filters = {
      location: uniqueCities,
      make: uniqueMakes,
      modelYear: uniqueModels,
      price:uniquePricerange,
      category:uniquecategorey,
      RegisteredIn:uniqueregisteredin,
      AdType:uniqueadtype,
      PictureAvailibility:uniquepictureavailibility

    };
  }

  applyFilters(selectedFilters: { [key: string]: string[] }): void {
    this.filteredAds = this.ads.filter(ad => {
      let matches = true;

      for (let key in selectedFilters) {
        if (selectedFilters.hasOwnProperty(key)) {
          const selectedOptions = selectedFilters[key];
          if (selectedOptions.length > 0 && !selectedOptions.includes(ad[key as keyof VehicleAd] as any)) {
            matches = false;
            break;
          }
        }
      }

      return matches;
    });
  }
  currentPage: number = 1;
pageSize: number = 10;

nextPage() {
  if ((this.currentPage * this.pageSize) < this.filteredAds.length) {
    this.currentPage++;
  }
}

prevPage() {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}
sortOption: string = 'Update Date: Recent First'; // Default sorting option

onSortChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.sortOption = target.value;
  this.sortAds();
}

sortAds() {
  switch (this.sortOption) {
    case 'Update Date: Recent First':
      this.filteredAds.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
    case 'Update Date: Oldest First':
      this.filteredAds.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      break;
    case 'Price: Low to High':
      this.filteredAds.sort((a, b) => a.price - b.price);
      break;
    case 'Price: High to Low':
      this.filteredAds.sort((a, b) => b.price - a.price);
      break;
    case 'Model Year: Latest First':
      this.filteredAds.sort((a, b) => b.modelYear - a.modelYear);
      break;
    
  }
}

}
