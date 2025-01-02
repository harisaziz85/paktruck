import { Component } from '@angular/core';

@Component({
  selector: 'app-ourvideos',
  templateUrl: './ourvideos.component.html',
  styleUrl: './ourvideos.component.css'
})
export class OurvideosComponent {
  videos = [
    { title: 'Video 1', thumbnail: 'assets/thumbnails/video1.jpg', src: 'images/video.mp4' },
    { title: 'Video 2', thumbnail: 'assets/thumbnails/video2.jpg', src: 'assets/videos/video2.mp4' },
    { title: 'Video 3', thumbnail: 'assets/thumbnails/video3.jpg', src: 'assets/videos/video3.mp4' }
  ];
}
