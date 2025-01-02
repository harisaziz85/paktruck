import { Component } from '@angular/core';

@Component({
  selector: 'app-makesmodels',
  templateUrl: './makesmodels.component.html',
  styleUrl: './makesmodels.component.css'
})
export class MakesmodelsComponent {
 
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
    ['under 5 lakh', '30-40 lakh', '80 lakh-1 crore', ],
    ['5-10 lakh', '40-50 lakh', '1-1.5 crore', ],
    ['10-20 lakh', '50-60 lakh', '1.5-2 crore '],
    ['20-30 lakh', '60-80 lakh', 'above 2 crore'],

  ];
  UsedTruckByYear = [
    ['2012 Truck', '2016 Truck', '2024 Truck', ],
    ['2011 Truck', '2015 Truck', '2023 Truck', ],
    ['2010 Truck', '2014 Truck', '2022 Truck '],
    ['2009 Truck', '2013 Truck', '2021 Truck'],

  ];
}
