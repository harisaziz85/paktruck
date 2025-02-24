import { Component } from '@angular/core';
import { VehicleAdsService } from '../../core/services/vehicle-ads.service';
import { VehicleAd } from '../../core/models/vehicle-ads';

@Component({
  selector: 'app-spare-parts',
  templateUrl: './spare-parts.component.html',
  styleUrl: './spare-parts.component.css'
})
export class SparePartsComponent {
  ads: VehicleAd[] = [];
  loading = true;
  errorMessage = '';
  loadingTire = true;
  errorMessageTire = '';
  adDetails: VehicleAd | null = null;
  sparePartsAds: any[] = [];
trunionAds: any[] = [];
loadingSpareParts = true;
loadingTrunion = true;
errorMessageSpareParts = '';
errorMessageTrunion = '';
cabinAds!: {
category: any; name: string; price: string; image: string 
}[];
  loadingExcavator: boolean | undefined;
  excavatorAds: {
name: any;
category: any;
    _id: string; // Ensure _id exists
    adType: string; price: string | number; images: string;
  }[] | undefined;
  errorMessageExcavator: string | undefined;
ad: any;
  tireAds: {
_id: any|string;
    category: string; name: string; // Add a default name
    price: number; image: string;
  }[] | undefined;
  tubeAds: {
    _id: string; // ✅ Include _id
    category: string; name: string; // Default name
    price: number; image: string; // Default image fallback
  }[] | undefined;
 
 

  constructor(private adService: VehicleAdsService) { }

  ngOnInit(): void {
    this.fetchspareparts();
    this.fetchtrunion();
    this.fetchHydraulicPump();
    this.fetchCabin(); 
    this.fetchTireAds();
    this.fetchChassis();
    this.fetchEngineAds();
    this.fetchTubeAds();

  }
  
  
  





  
  fetchTubeAds(): void {
    this.loadingTrunion = true; // Ensure consistent naming
    this.errorMessageTrunion = ''; // Reset error
  
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.tubeAds = response.data
            .filter((ad: any) => ad.category?.trim().toLowerCase() === 'tube')
            .map((ad: any) => ({
              _id: ad._id.toString(), // Ensure _id is a string
              category: ad.category || 'Unknown', // Default category
              name: 'Tube', // ✅ Added missing name field
              price: parseFloat(ad.price) || 0, // ✅ Ensure price is a number
              image: ad.images?.length > 0 ? ad.images[0] : 'assets/default-image.jpg', // ✅ Ensure image is a string
            }));
        } else {
          this.tubeAds = [];
        }
        this.loadingTrunion = false;
      },
      error: (error) => {
        this.errorMessageTrunion = 'Failed to load tube ads';
        console.error('Error fetching tube ads:', error);
        this.loadingTrunion = false;
      }
    });
  }
  
  
 
  

  fetchTireAds(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.tireAds = response.data
            .filter((ad: VehicleAd) => ad.category?.trim().toLowerCase() === 'tire')
            .map((ad: VehicleAd) => ({
              _id: ad._id, // ✅ Include _id
              category: ad.category,
              name: 'Tire', // Default name
              price: ad.price,
              image: ad.images.length > 0 ? ad.images[0] : 'assets/default-image.jpg' // Default image fallback
            }));
        }
        this.loadingTire = false;
      },
      error: (error) => {
        this.errorMessageTire = 'Failed to load tire ads';
        console.error('Error fetching tire ads:', error);
        this.loadingTire = false;
      }
    });
  }

  fetchspareparts(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.sparePartsAds = response.data.filter(ad => ad.category === 'Body_Part');
        }
        this.loadingSpareParts = false;
      },
      error: (error) => {
        this.errorMessageSpareParts = 'Failed to load spare parts ads';
        console.error('Error fetching spare parts ads:', error);
        this.loadingSpareParts = false;
      }
    });
  }
  
  fetchtrunion(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        console.log('API Response:', response); // ✅ Debugging
  
        if (response.status === 'success') {
          this.trunionAds = response.data
            .filter(ad => ad.category?.trim().toLowerCase() === 'trunion') // Ensure category exists
            .map(ad => ({
              _id: ad._id, // ✅ Include _id for routing
              category: ad.category || 'Unknown',
              adType: ad.adType || 'Unknown',
              price: ad.price || 'Price not available',
              images: ad.images?.length ? ad.images : ['assets/default-image.png']
            }));
  
          console.log('Filtered Trunnion Ads:', this.trunionAds); // ✅ Debugging
        }
  
        this.loadingTrunion = false;
      },
      error: (error) => {
        this.errorMessageTrunion = 'Failed to load trunion ads';
        console.error('Error fetching trunion ads:', error);
        this.loadingTrunion = false;
      }
    });
  }
  
  
  
  fetchHydraulicPump(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.hydraulicpump = response.data
            .filter(ad => ad.category?.trim().toLowerCase() === 'hydraulic pump') // ✅ Correct filtering
            .map(ad => ({
              name: ad.adType || 'Unknown',  
              category: ad.category || 'Unknown', // ✅ Added category here
              price: ad.price ? `PKR ${ad.price}` : 'Price not available', 
              image: ad.images && ad.images.length > 0 ? ad.images[0] : 'assets/default-image.png'
            }));
        }
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Failed to load hydraulic pump ads';
        console.error('Error fetching hydraulic pump ads:', error);
        this.loading = false;
      }
    });
}
fetchExcavatorAds(): void {
  this.adService.getAds().subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.excavatorAds = response.data
        .filter((ad: any) => ad.adType?.trim().toLowerCase() === 'Excavator Boom')
                  .map((ad: any) => ({
            _id: ad._id,
            adType: ad.adType, 
            category: ad.category || 'Excavator', // ✅ Add missing category
            name: ad.name || 'Excavator Part', // ✅ Add missing name
            price: ad.price,
            images: ad.images.length > 0 ? ad.images[0] : 'assets/default-image.jpg'
          }));
      }
      this.loadingExcavator = false;
    },
    error: (error) => {
      this.errorMessageExcavator = 'Failed to load excavator ads';
      console.error('Error fetching excavator ads:', error);
      this.loadingExcavator = false;
    }
  });
}



  
  fetchCabin(): void {
    this.adService.getAds().subscribe({
      next: (response) => {
        if (response.status === 'success') {
          this.cabinAds = response.data
            .filter(ad => ad.category?.trim().toLowerCase() === 'cabin')
            .map(ad => ({
              name: ad.adType || 'Unknown',
              price: ad.price ? `PKR ${ad.price}` : 'Price not available',
              image: ad.images && ad.images.length > 0 ? ad.images[0] : 'assets/default-image.png',
              category: ad.category || 'Unknown'
            }));
        }
        
      },
      error: (error) => {
        console.error('Error fetching cabin ads:', error);
      }
    });
  }
 



  chassisAds: any[] = [];

fetchChassis(): void {
  this.adService.getAds().subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.chassisAds = response.data
          .filter(ad => ad.category?.trim().toLowerCase() === 'chasis')
          .map(ad => ({
            name: ad.adType || 'Unknown',
            price: ad.price ? `PKR ${ad.price}` : 'Price not available',
            image: ad.images && ad.images.length > 0 ? ad.images[0] : 'assets/default-image.png',
            category: ad.category || 'Unknown'
          }));
      }
    },
    error: (error) => {
      console.error('Error fetching chassis ads:', error);
    }
  });
}




engineAds: any[] = [];

fetchEngineAds(): void {
  this.adService.getAds().subscribe({
    next: (response) => {
      if (response.status === 'success') {
        this.engineAds = response.data
          .filter(ad => ad.category?.trim().toLowerCase() === 'engine') // Ensure correct category filtering
          .map(ad => ({
            _id: ad._id,
            price: ad.price ? `PKR ${ad.price}` : 'Price not available',
            images: ad.images && ad.images.length > 0 ? ad.images : ['assets/default-image.png'],
            category: ad.category || 'Unknown'
          }));
      }
    },
    error: (error) => {
      console.error('Error fetching engine ads:', error);
    }
  });
}


  
  
  
  
  
  
  
  




  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  menuItems = [
    { label: 'Body parts', section: 'bodyparts' },
    { label: 'Trunnion', section: 'trunnion' },
    { label: 'Hydraulic pump', section: 'hydraulicpump' },
    { label: 'Tire', section: 'tire' },
    { label: 'Cabin', section: 'cabin' },
    { label: 'Chassis', section: 'chassis' },
    { label: 'Excavator Boom', section: 'excavatorboom' },
    { label: 'Leaf spring', section: 'leafspring' },
    { label: 'Engine', section: 'engine' },
    { label: 'Tube', section: 'tube' },



  ];


 
  hydraulicpump = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  tire = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];

  excavatorboom = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  leafspring = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png' },
    { name: 'Wooden', price: 'PKR 7,500,000', image: 'images/spare2.png' },
    { name: 'Flatbed', price: 'PKR 7,500,000', image: 'images/spare3.png' },
    { name: 'Tanker', price: 'PKR 7,500,000', image: 'images/spare4.png' },
  ];
  engine = [
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
 
}
