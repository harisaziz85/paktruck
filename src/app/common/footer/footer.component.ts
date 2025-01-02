import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 
  categorymake = [
    { title:'Categories by Make', label: 'Toyota Trucks for Sale', url: '#home' },
    { label: 'Suzuki Trucks for Sale', url: '#services' },
    { label: 'Honda Trucks for Sale', url: '#contact' },
    { label: 'Daihatsu Trucks for Sale', url: '#contact' },
    { label: 'Mitsubishi Trucks for Sale', url: '#contact' },
    { label: 'Nissan Trucks for Sale', url: '#contact' },
    { label: 'Mercedes Trucks for Sale', url: '#contact' },
    { label: 'Hyundai Trucks for Sale', url: '#contact' },
    { label: 'BMW Trucks for Sale', url: '#contact' },


  ];
  Cities = [
    { title:' Cities', label: 'Trucks in Karachi', url: '' },
    { label: 'Trucks in Lahore', url: '' },
    { label: 'Trucks in Islamabad', url: '' },
    { label: 'Trucks in Rawalpindi', url: '' },
    { label: 'Trucks in Peshawar', url: '' },
    { label: 'Trucks in Faisalabad', url: '' },
    { label: 'Trucks in Multan', url: '' },
    { label: 'Trucks in Gujranwala', url: '' },
    { label: 'Trucks in Sialkot', url: '' },
    { label: 'Trucks in Sargodha', url: '' },



  ];


  ExplorePakTrucks = [
    { title:' Explore PakTrucks ', label: 'Used Trucks', url: '' },
    { label: 'Auto Parts & Accessories', url: '' },
    { label: 'Cool Rides', url: '' },
    { label: 'Forums', url: '' },
    { label: 'Autoshow', url: '' },
    { label: 'Sitemap', url: '' },
  ];
  PakTrucks = [
    { title:'PakTrucks.com ', label: 'About PakTrucks.com', url: '' },
    { label: 'Our Products', url: '' },
    { label: 'Advertise With Us', url: '' },
    { label: 'How To Pay', url: '' },
    { label: 'FAQs', url: '' },
    { label: 'Refunds & Returns', url: '' },
    { label: 'Careers', url: '' },
    { label: 'Contact Us', url: '' },
  ];
  TrucksbyCateogries = [
    { title:' Trucks by Cateogries ', label: 'Jeep', url: '' },
    { label: 'Japanese Trucks', url: '' },
    { label: 'Imported Trucks', url: '' },
    { label: 'Automatic Trucks', url: '' },
    { label: 'Low Priced Trucks', url: '' },
    { label: '4x4 Trucks', url: '' },
    { label: '660cc Trucks', url: '' },
    { label: 'Hyundai Trucks for Sale', url: '' },
    { label: '1000cc Trucks', url: '' },
  ];
  TrucksbyBodytype = [
    { title:'Trucks by Body type ', label: 'Sedan', url: '' },
    { label: 'Hatchback', url: '' },
    { label: 'SUV', url: '' },
    { label: 'Crossover', url: '' },
    { label: 'Mini Van', url: '' },
    { label: 'Van', url: '' },
    { label: 'Compact SUV', url: '' },
    { label: 'MPV', url: '' },
  ];
  TrucksbyColor = [
    { title:'Trucks by Color ', label: 'White Truck', url: '' },
    { label: 'Black Truck', url: '' },
    { label: 'Grey Truck', url: '' },
    { label: 'Blue Truck', url: '' },
    { label: 'Red Truck', url: '' },
    { label: 'Green Truck', url: '' },
    { label: 'Gold Truck', url: '' },
  
  ];
  TrucksbyProvince = [
    { title:'Trucks by Province ', label: 'Trucks by Province', url: '' },
    { label: 'Trucks in Punjab', url: '' },
    { label: 'Trucks in Sindh', url: '' },
    { label: 'Trucks in KPK', url: '' },
    { label: 'Trucks in Balochistan', url: '' },
    { label: 'Trucks in Azad Kashmir', url: '' },
    { label: 'Trucks in Federally...', url: '' },
  ];












  // Contact Info
  contactInfo = {
    email: 'info@example.com',
    phone: '+123 456 7890'
  };
}
