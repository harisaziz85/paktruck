import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  brands = [
    { id: 1, name: 'Hino Pakistan', logo: 'images/hino.png' },
    { id: 2, name: 'Isuzu Pakistan', logo: 'images/isuzu.png' },
    { id: 3, name: 'Volvo Pakistan', logo: 'images/volvo.png' },
    { id: 4, name: 'Sinotruck Pakistan', logo: 'images/image (4).png' },
    { id: 5, name: 'Kamaz Pakistan', logo: 'images/kamaz.png' },
    { id: 6, name: 'Mercedes-Benz Pakistan', logo: 'images/mercedes.png' },
    { id: 7, name: 'Scania Pakistan', logo: 'images/scania.png' },
    { id: 8, name: 'FAW Nishat Motors', logo: 'images/faw.png' },
    { id: 9, name: 'Hyundai Nishat Motors', logo: 'images/hyundai.png' },
    { id: 10, name: 'Master Motors', logo: 'images/master.png' },
    { id: 11, name: 'JAC Pakistan', logo: 'images/jack0.png' },
    { id: 12, name: 'TATA Pakistan', logo: 'images/tata.png' },
    { id: 13, name: 'JAC', logo: 'images/jac.png' },
    { id: 14, name: 'JW Forland Fuso', logo: 'images/jw.png' },
  ];

  // Array to store brands divided into columns
  columns: any[] = [];

  constructor() {
    this.splitIntoColumns(5); // Ensure 5 brands per column
  }

  splitIntoColumns(brandsPerColumn: number) {
    const columnCount = Math.ceil(this.brands.length / brandsPerColumn);
    for (let i = 0; i < columnCount; i++) {
      this.columns.push(this.brands.slice(i * brandsPerColumn, (i + 1) * brandsPerColumn));
    }
  }
}
