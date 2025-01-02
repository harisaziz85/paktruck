import { Component } from '@angular/core';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrl: './opinions.component.css'
})
export class OpinionsComponent {
opinions= [
    { title: 'How do you Spot Legitimately Looking Fake Engine title', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare.png' },
    { title: 'Wooden', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare2.png' },
    { title: 'Flatbed', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare3.png' },
    { title: 'Tanker', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare4.png' },
  ];
}
