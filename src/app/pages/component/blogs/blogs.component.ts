import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  posts = [
    {
      title: 'Sazgar Engineering Sold 1,000+ Truck Last Month',
      author: 'Omar Faruq',
      date: 'Nov 6, 2024',
      image: 'assets/images/blog1.jpg',
      summary: 'Pakistan is making significant strides towards a greener and more sustainable future...'
    },
    {
      title: '2025 Kia Sportage Facelift Unveiled – Specs & Features',
      author: 'Omar Faruq',
      date: 'Nov 6, 2024',
      image: 'assets/images/blog2.jpg',
      summary: 'Kia has officially unveiled the 2025 facelifted Kia Sportage in South Korea...'
    },
    {
      title: 'CM Punjab Gifted New Alto to Blind Vlogger',
      author: 'Omar Faruq',
      date: 'Nov 6, 2024',
      image: 'assets/images/blog3.jpg',
      summary: 'Punjab Chief Minister Maryam Nawaz Sharif has shown a compassionate gesture...'
    },
    // Add more blog posts here
  ];
}
