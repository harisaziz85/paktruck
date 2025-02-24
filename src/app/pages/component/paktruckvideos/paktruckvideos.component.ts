import { Component } from '@angular/core';

@Component({
  selector: 'app-paktruckvideos',
  standalone: false,
  
  templateUrl: './paktruckvideos.component.html',
  styleUrl: './paktruckvideos.component.css'
})
export class PaktruckvideosComponent {
  
    videos = [
      {
        thumbnail: 'assets/videos/video1.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur. Ligula blandit.',
        videoUrl: 'https://www.youtube.com/watch?v=example1'
      },
      {
        thumbnail: 'assets/videos/video2.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        videoUrl: 'https://www.youtube.com/watch?v=example2'
      },
      {
        thumbnail: 'assets/videos/video3.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        videoUrl: 'https://www.youtube.com/watch?v=example3'
      },
      {
        thumbnail: 'assets/videos/video4.jpg',
        title: 'Lorem ipsum dolor sit amet.',
        videoUrl: 'https://www.youtube.com/watch?v=example4'
      },
      {
        thumbnail: 'assets/videos/video5.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        videoUrl: 'https://www.youtube.com/watch?v=example5'
      },
      {
        thumbnail: 'assets/videos/video6.jpg',
        title: 'Lorem ipsum dolor sit amet consectetur.',
        videoUrl: 'https://www.youtube.com/watch?v=example6'
      }
    ];
}
