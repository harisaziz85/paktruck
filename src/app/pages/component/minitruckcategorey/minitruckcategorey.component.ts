import { Component } from '@angular/core';

@Component({
  selector: 'app-minitruckcategorey',
  templateUrl: './minitruckcategorey.component.html',
  styleUrl: './minitruckcategorey.component.css'
})
export class MinitruckcategoreyComponent {
  categories = [
    { image: 'images/truck1.png', title: 'Cargo Landing Truck' },
    { image: 'images/truck2.png', title: 'Dumper Truck',  },
    { image: 'images/truck3.png', title: 'Flatbed Truck',  },
    { image: 'images/truck4.png', title: 'Trailer Truck',  },
    { image: 'images/truck5.png', title: 'Tanker Truck',  },
  
  ];
}
