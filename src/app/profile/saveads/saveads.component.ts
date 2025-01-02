import { Component } from '@angular/core';

@Component({
  selector: 'app-saveads',
  templateUrl: './saveads.component.html',
  styleUrl: './saveads.component.css'
})
export class SaveadsComponent {

    myads = [
      { name: 'Damper', price: 'PKR 7,500,000', image: 'images/spare.png', details: ['10 tons', 'Yellow', 'New'],
        location:'Lahore',lastupdate:'1 minute ago',viewbtn:'View Ads',submitbtn:'Contact Us'
       },
  
  

  ];
}
