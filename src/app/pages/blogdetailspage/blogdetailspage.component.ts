import { Component } from '@angular/core';

@Component({
  selector: 'app-blogdetailspage',
  templateUrl: './blogdetailspage.component.html',
  styleUrl: './blogdetailspage.component.css'
})
export class BlogdetailspageComponent {
  carouselItems = [
    { src: 'images/heroimg.png', alt: 'First slide' },
    { src: 'images/heroimg.png', alt: 'Second slide' },
    { src: 'images/heroimg.png', alt: 'Third slide' }
  ];
}
