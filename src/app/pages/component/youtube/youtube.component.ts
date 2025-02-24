import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {
  currentVideo: string = ''; // Default video URL
  currentVideoTitle: string = ''; // Default video title
  currentVideoSafe: SafeResourceUrl; // Safe resource URL for iframe

  playlist = [
    {
      title: 'Deepal L07 Sedan First Drive Review Deepal L07 Sedan First Drive Review ',
      url: 'https://www.youtube.com/embed/zFkKXgoIoN0?si=CSn0SeNHAtGMko3M',
      duration: '4:57',
    },
    {
      title: 'Truck',
      url: 'https://www.youtube.com/embed/d6j_xOG4sPo?si=_j7rjGyr0hS3pJmJ',
      duration: '2:33',
    },
    {
      title: 'truck1',
      url: 'https://www.youtube.com/embed/ghi101',
      duration: '3:21',
    },
    {
      title: 'truck2',
      url: 'https://www.youtube.com/embed/ghi101111',
      duration: '3:21',
    },
    {
      title: 'truck3',
      url: 'https://www.youtube.com/embed/ghi101222',
      duration: '3:21',
    },
    {
      title: 'truck3',
      url: 'https://www.youtube.com/embed/ghi101333',
      duration: '3:21',
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Set the first video in the playlist as default
    const firstVideo = this.playlist[0];
    this.currentVideo = firstVideo.url;
    this.currentVideoTitle = firstVideo.title;
    this.currentVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      firstVideo.url
    );
  }

  playVideo(video: any) {
    this.currentVideo = video.url;
    this.currentVideoTitle = video.title;
    this.currentVideoSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
      video.url
    );
  }

  getThumbnail(videoUrl: string): string {
    const videoId = this.extractVideoId(videoUrl);
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  }

  extractVideoId(videoUrl: string): string {
    const match = videoUrl.match(/embed\/([a-zA-Z0-9_-]+)/);
    return match ? match[1] : '';
  }
}
