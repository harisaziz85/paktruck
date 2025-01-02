import { Component } from '@angular/core';

@Component({
  selector: 'app-filtercomponent',
  templateUrl: './filtercomponent.component.html',
  styleUrl: './filtercomponent.component.css'
})
export class FiltercomponentComponent {
  Brand = [
    { 
      heading: 'Toyota', 
      image: 'images/toyota.png', 
      cities: ['Corolla', 'Vitz', 'Hilux', 'Yaris', 'Land Curser'] 
    },
    { 
      heading: 'Suzuki', 
      image: 'images/suzuki.png', 
      cities: ['Mehran', 'Cultus', 'Alto', 'Wagon R', 'Bolan'] 
    },
    { 
      heading: 'Honda', 
      image: 'images/honda.png', 
      cities: ['Civic', 'City', 'Vezel', 'BR-V', 'N Wgn'] 
    },
    { 
      heading: 'Daihatsu', 
      image: 'images/daih.png', 
      cities: ['Mira', 'Move', 'Charade', 'Taft', 'Tanto'] 
    }
  ];


  UsedTruckbyCity = [
    ['Karachi', 'Lahore', 'Islamabad', ],
    ['Faisalabad', 'Multan', 'Gujranwala', ],
    ['Sialkot', 'Sargodha', 'Rawalpindi '],
    ['Peshawar', 'Sargodha', 'Sargodha'],

  ];
  UsedTruckbyBudget = [
    ['1000cc Truck for Sale ', '1800cc Truck for Sale ', '1200cc Truck for Sale', ],
    ['1500cc Truck for Sale', '800cc Truck for Sale', '1000cc Truck for Sale ', ],
    ['660cc Truck for Sale', '1600cc Truck for Sale', '800cc Truck for Sale '],
    ['1800cc Truck for Sale', '2000cc Truck for Sale', '1800cc Truck for Sale '],

  ];
  UsedTruckByYear = [
    ['2012 Truck', '2016 Truck', '2024 Truck', ],
    ['2011 Truck', '2015 Truck', '2023 Truck', ],
    ['2010 Truck', '2014 Truck', '2022 Truck '],
    ['2009 Truck', '2013 Truck', '2021 Truck'],

  ];
}
