import { Component } from '@angular/core';

@Component({
  selector: 'app-showroomprofile',
  templateUrl: './showroomprofile.component.html',
  styleUrl: './showroomprofile.component.css'
})
export class ShowroomprofileComponent {
  postAds = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png', details: ['2024', '103,950 km', 'Petrol','Automatic'],
      location:'Lahore',lastupdate:'1 minute ago',viewbtn:'View Ads',submitbtn:'Sumbit'
     },
     { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png', details: ['10 tons', 'Yellow', 'New'],
      location:'Lahore',lastupdate:'1 minute ago',viewbtn:'View Ads',submitbtn:'Sumbit'
     },
  ];

  factory = [
    { title: 'Shop 1',location: ' Lahore', imageUrl: 'https://via.placeholder.com/300x200' },
    { title: 'Shop 2', location: ' Lahore', imageUrl: 'https://via.placeholder.com/300x200' },
  ];
}
