import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blogs } from '../models/blogs';

import { baseURL } from '../constants/base.url';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  getBlogById(blogId: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<{ success: boolean; data: Blogs[] }> {
    return this.http.get<{ success: boolean; data: Blogs[] }>(`${baseURL}profile/get-user-blog`);
  }
}
  
