import { Component } from '@angular/core';

@Component({
  selector: 'app-earthmovigmachinery',
  templateUrl: './earthmovigmachinery.component.html',
  styleUrl: './earthmovigmachinery.component.css'
})
export class EarthmovigmachineryComponent {
  categories = [
    { image: 'images/truck1.png', title: 'Cargo Landing Truck' },
    { image: 'images/truck2.png', title: 'Dumper Truck',  },
    { image: 'images/truck3.png', title: 'Flatbed Truck',  },
    { image: 'images/truck4.png', title: 'Trailer Truck',  },
    { image: 'images/truck5.png', title: 'Tanker Truck',  },
    { image: 'images/truck6.png', title: 'Container Carrier Truck',  },
    { image: 'images/truck7.png', title: 'Container Carrier Truck', },
    { image: 'images/truck8.png', title: 'Freezer Truck',  },
    { image: 'images/truck9.png', title: 'Box truck', },
    { image: 'images/truck10.png', title: 'Dump truck',  },
  ];
}
