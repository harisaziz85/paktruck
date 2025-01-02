import { Component } from '@angular/core';

@Component({
  selector: 'app-tipsandadvice',
  templateUrl: './tipsandadvice.component.html',
  styleUrl: './tipsandadvice.component.css'
})
export class TipsandadviceComponent {
  tipsandadivce = [
    { title: 'How do you Spot Legitimately Looking Fake Engine title', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare.png' },
    { title: 'Wooden', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare2.png' },
    { title: 'Flatbed', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare3.png' },
    { title: 'Tanker', date:'10-11-2024', name: 'Andrew tate', image: 'images/spare4.png' },
  ];
}
