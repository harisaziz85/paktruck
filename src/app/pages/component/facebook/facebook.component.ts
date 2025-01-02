import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  currentVideo: string = 'https://www.facebook.com/video/embed?video_id=10155035458146729'; // Default Facebook video
  currentVideoTitle: string = 'Nature Scenery | Relaxing View';
  currentVideoSafe: SafeResourceUrl;

  playlist = [
    {
      title: 'Nature Scenery | Relaxing View',
      url: 'https://www.facebook.com/video/embed?video_id=10155035458146729',
      thumbnail: 'https://via.placeholder.com/150/92c952',
      duration: '3:45',
    },
    {
      title: 'Funny Cats Compilation',
      url: 'https://www.facebook.com/video/embed?video_id=10155012345678901',
      thumbnail: 'https://via.placeholder.com/150/771796',
      duration: '4:10',
    },
    {
      title: 'Inspiring Motivational Talk',
      url: 'https://www.facebook.com/video/embed?video_id=10155098765432110',
      thumbnail: 'https://via.placeholder.com/150/24f355',
      duration: '6:12',
    },
    {
      title: 'Travel Vlog | Exploring Mountains',
      url: 'https://www.facebook.com/video/embed?video_id=10155055512349876',
      thumbnail: 'https://via.placeholder.com/150/d32776',
      duration: '5:33',
    },
    {
      title: 'Cooking Masterclass | Delicious Recipes',
      url: 'https://www.facebook.com/video/embed?video_id=10155043219876543',
      thumbnail: 'https://via.placeholder.com/150/f66b97',
      duration: '7:50',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Initialize the safe URL for the default video
    this.currentVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.currentVideo);
  }

  playVideo(video: any) {
    console.log(`Playing video: ${video.title}`);
    console.log(`Video URL: ${video.url}`);
    console.log(`Thumbnail: ${video.thumbnail}`);
    console.log(`Duration: ${video.duration}`);

    this.currentVideo = video.url;
    this.currentVideoTitle = video.title;
    this.currentVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(video.url);
  }
}
