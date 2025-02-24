import { Component } from '@angular/core';

@Component({
  selector: 'app-earthmovigmachinery',
  templateUrl: './earthmovigmachinery.component.html',
  styleUrl: './earthmovigmachinery.component.css'
})
export class EarthmovigmachineryComponent {
  categories = [
    { image: 'images/truck1.png', title: 'Excavator operator', link: '/excavator-operator' },

    { image: 'images/truck2.png', title: 'loader operator', link: '/loader-operator' },
    { image: 'images/truck3.png', title: 'Roller Machine', link: '/roller-machine' },
    { image: 'images/truck4.png', title: 'Grader machine', link: '/grader-machine' },
    { image: 'images/truck5.png', title: 'Crane Machine', link: '/crane-machine' },
    { image: 'images/truck6.png', title: 'wheel tractor', link: '/wheeltractor' },
    { image: 'images/truck7.png', title: 'Road Cutter',link: '/roadcutter' },
    { image: 'images/truck8.png', title: 'Drilling Machine' ,link: '/drillingmachine' },
    { image: 'images/truck9.png', title: 'Compactor machine', link: '/compactor-machine'},
    { image: 'images/truck10.png', title: 'Forklift operator', link: '/Forkliftoperator' },
  ];
}
