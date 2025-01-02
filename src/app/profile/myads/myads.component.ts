import { Component } from '@angular/core';

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrl: './myads.component.css'
})
export class MyadsComponent {
  myads = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png', details: ['10 tons', 'Yellow', 'New'],
      location:'Lahore',lastupdate:'1 minute ago',viewbtn:'View Ads',submitbtn:'Contact Us'
     },

  ];
}
