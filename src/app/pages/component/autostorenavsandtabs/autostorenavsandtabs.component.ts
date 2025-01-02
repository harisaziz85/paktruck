import { Component } from '@angular/core';

@Component({
  selector: 'app-autostorenavsandtabs',
  templateUrl: './autostorenavsandtabs.component.html',
  styleUrl: './autostorenavsandtabs.component.css'
})
export class AutostorenavsandtabsComponent {
  autoStores = [
    { image: 'images/1show.png', title: 'Auto Store 1', location: 'New York' },
    { image: 'images/2show.png', title: 'Auto Store 2', location: 'Los Angeles' },
    { image: 'images/3show.png', title: 'Auto Store 3', location: 'Chicago' },
    { image: 'images/4show.png', title: 'Auto Store 4', location: 'Houston' },
    { image: 'images/5show.png', title: 'Auto Store 5', location: 'Phoenix' },
    // Add more data as needed
  ];

  factories = [
    { image: 'images/1show.png', title: 'Factory 1', location: 'Berlin' },
    { image: 'images/2show.png', title: 'Factory 2', location: 'Paris' },
    { image: 'images/3show.png', title: 'Factory 3', location: 'Tokyo' },
    { image: 'images/4show.png', title: 'Factory 4', location: 'London' },
    { image: 'images/5show.png', title: 'Factory 5', location: 'Dubai' },
    // Add more data as needed
  ];

  showrooms = [
    { image: 'images/1show.png', title: 'Showroom 1', location: 'Madrid' },
    { image: 'images/2show.png', title: 'Showroom 2', location: 'Rome' },
    { image: 'images/3show.png', title: 'Showroom 3', location: 'Sydney' },
    { image: 'images/4show.png', title: 'Showroom 4', location: 'Mumbai' },
    { image: 'images/5show.png', title: 'Showroom 5', location: 'Toronto' },
    // Add more data as needed
  ];
}
