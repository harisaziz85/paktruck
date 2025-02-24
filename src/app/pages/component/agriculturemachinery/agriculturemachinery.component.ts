import { Component } from '@angular/core';

@Component({
  selector: 'app-agriculturemachinery',
  standalone: false,
  
  templateUrl: './agriculturemachinery.component.html',
  styleUrl: './agriculturemachinery.component.css'
})
export class AgriculturemachineryComponent {
  categories = [
    { image: 'images/truck1.png', title: 'Tractor', link: '/tractor' },
    { image: 'images/truck2.png', title: 'Threshers', link: 'threshers' },
    { image: 'images/truck3.png', title: 'Harvesters', link: '/harvester' },
    { image: 'images/truck4.png', title: 'Seeders', link: '/seeders' },
    { image: 'images/truck5.png', title: 'Plows', link: '/plows' }
  ]
}
