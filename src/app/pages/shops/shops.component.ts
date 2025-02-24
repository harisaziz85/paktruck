import { Component, OnInit } from '@angular/core';
import { ShopsService } from '../../core/services/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  shops: any[] = [];

  constructor(private shopsService: ShopsService) {}

  ngOnInit(): void {
    this.fetchShops();
  }

  fetchShops() {
    this.shopsService.getShops().subscribe((response: any) => {
      if (response.status === 'success') {
        this.shops = response.data;
      }
    });
  }
}
