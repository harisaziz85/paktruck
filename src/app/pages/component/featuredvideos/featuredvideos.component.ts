import { Component } from '@angular/core';

@Component({
  selector: 'app-featuredvideos',
  templateUrl: './featuredvideos.component.html',
  styleUrls: ['./featuredvideos.component.css']
})
export class FeaturedvideosComponent {
  videos = [
    { title: 'Video 1', thumbnail: 'images/spare2.png', src: 'images/video.mp4' },
    { title: 'Video 2', thumbnail: 'images/spare2.png', src: 'assets/videos/video2.mp4' },
    { title: 'Video 3', thumbnail: 'images/spare2.png', src: 'assets/videos/video3.mp4' }
  ];
  paktruckvideos = [
    { title: 'Video 1', thumbnail: 'images/spare2.png', src: 'images/video.mp4' },
    { title: 'Video 2', thumbnail: 'images/spare2.png', src: 'assets/videos/video2.mp4' },
    { title: 'Video 3', thumbnail: 'images/spare2.png', src: 'assets/videos/video3.mp4' }
  ];
  autopartsvideos = [
    { title: 'Video 1', thumbnail: 'images/spare2.png', src: 'images/video.mp4' },
    { title: 'Video 2', thumbnail: 'images/spare2.png', src: 'assets/videos/video2.mp4' },
    { title: 'Video 3', thumbnail: 'images/spare2.png', src: 'assets/videos/video3.mp4' }
  ];
}