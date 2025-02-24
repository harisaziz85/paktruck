import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../core/services/blogs.service';
import { Blogs } from '../../core/models/blogs';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrls: ['./allblogs.component.css']
})
export class AllblogsComponent implements OnInit {
  posts: Blogs[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }
  newsdata = [
    {
      title: 'Petrol Price in Pakistan Increased by Rs.1.35/Liter',
      name: 'Andrew Tate',
      date: '04 Nov 2024'
    }
  ];

  fetchBlogs(): void {
    this.blogsService.getAllBlogs().subscribe({
      next: (response) => {
        if (response.success) {
          this.posts = response.data;
        } else {
          this.errorMessage = 'No blogs available.';
        }
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Failed to load blogs';
        this.isLoading = false;
      }
    });
  }
}
