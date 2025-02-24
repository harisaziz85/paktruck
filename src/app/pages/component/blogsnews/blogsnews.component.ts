import { Component } from '@angular/core';

@Component({
  selector: 'app-blogsnews',
  standalone: false,
  
  templateUrl: './blogsnews.component.html',
  styleUrl: './blogsnews.component.css'
})
export class BlogsnewsComponent {
  
    activeTab: string = 'blogs';
  
    tabs = [
      { id: 'blogs', title: 'Blogs' },
      { id: 'news', title: 'News' },
      { id: 'discussions', title: 'Discussions' }
    ];
  
    content: { [key: string]: { title: string; description: string }[] } = {
      blogs: [
        { title: 'Introduction to Angular', description: 'Learn the basics of Angular framework.' },
        { title: 'Best Practices in Web Development', description: 'Tips and tricks for writing clean code.' }
      ],
      news: [
        { title: 'Angular 17 Released', description: 'Latest features and improvements in Angular 17.' },
        { title: 'Bootstrap 5.3 Updates', description: 'New utilities and components in Bootstrap 5.3.' }
      ],
      discussions: [
        { title: 'How to Optimize Angular Apps?', description: 'Share your best performance optimization tips.' },
        { title: 'Future of Web Development', description: 'What technologies will dominate in 2025?' }
      ]
    };
  
    setActiveTab(tabId: string) {
      this.activeTab = tabId;
    }
  }
  

