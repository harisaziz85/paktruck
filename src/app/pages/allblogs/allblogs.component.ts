import { Component } from '@angular/core';

@Component({
  selector: 'app-allblogs',
  templateUrl: './allblogs.component.html',
  styleUrl: './allblogs.component.css'
})
export class AllblogsComponent {
  newsdata=[
    {
      title:'Petrol Price in Pakistan Increased by Rs.1.35/Liter',
      name:'Andrew tate',
      date:'04 Nov 2024'
  },
  ]
  posts = [
    {
      title: 'Sazgar Engineering Sold 1,000+ Truck Last Month',
      author: 'Omar Faruq',
      date: 'Nov 6, 2024',
      image: 'images/blog img.png',
      summary: 'Pakistan is making significant strides towards a greener and more sustainable future...'
    },
    {
      title: '2025 Kia Sportage Facelift Unveiled – Specs & Features',
      author: 'Omar Faruq',
      date: 'Nov 6, 2024',
      image: 'images/blog img.png',
      summary: 'Kia has officially unveiled the 2025 facelifted Kia Sportage in South Korea...'
    },
   
    
  ];
}
