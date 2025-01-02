import { Component } from '@angular/core';

@Component({
  selector: 'app-filterpage',
  templateUrl: './filterpage.component.html',
  styleUrl: './filterpage.component.css'
})
export class FilterpageComponent {
  myads = [
    { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png', details: ['10 tons', 'Yellow', 'New'],
      location:'Lahore',lastupdate:'1 minute ago',viewbtn:'View Ads',submitbtn:'Contact Us'
     },

  ];
}
