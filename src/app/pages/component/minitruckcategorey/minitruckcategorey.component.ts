import { Component } from '@angular/core';

@Component({
  selector: 'app-minitruckcategorey',
  templateUrl: './minitruckcategorey.component.html',
  styleUrl: './minitruckcategorey.component.css'
})
export class MinitruckcategoreyComponent {
  categories = [
    { image: 'images/truck1.png', title: 'Cargo Landing Truck', link: '/cargo-landing-truck' },
    { image: 'images/truck2.png', title: 'Dumper Truck', link: '/dumper' },
    { image: 'images/truck3.png', title: 'Flatbed Truck', link: '/flatbed'},
    { image: 'images/truck4.png', title: 'Trailer Truck', link: '/trailer' },
    { image: 'images/truck5.png', title: 'Tanker Truck', link: '/tanker' },
    { image: 'images/truck5.png', title: 'Container Carrier Truck', link: '/container-carrier' },
    { image: 'images/truck5.png', title: 'Freezer Truck', link: '/freezer' },
    { image: 'images/truck5.png', title: 'Box Truck', link: '/box' },
    { image: 'images/truck5.png', title: 'Dump Truck', link: '/dumper' },
  ];
}
