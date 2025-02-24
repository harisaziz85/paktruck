import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-shopusers',
  standalone: false,
  
  templateUrl: './shopusers.component.html',
  styleUrl: './shopusers.component.css'
})
export class ShopusersComponent {
    users = [
      { shopName: 'Truck Shop', name: 'Salim', number: '03345514372', email: 'salim123@gmail.com', cnic: '12345-6789012-3', status: 'Active' },
      { shopName: 'Engine Shop', name: 'Zubair', number: '23348199391', email: 'remani2@gmail.com', cnic: '12345-6789012-4', status: 'Active' },
      { shopName: 'Spare Parts Shop', name: 'Arman', number: '34456876432', email: 'am323@gmail.com', cnic: '12345-6789012-5', status: 'Active' },
      { shopName: 'Truck Shop', name: 'Aziz', number: '31234567891', email: 'khan56@gmail.com', cnic: '12345-6789012-6', status: 'Active' },
      { shopName: 'Fayaz Truck Shop', name: 'Perwez', number: '34567890213', email: 'perwezali8@gmail.com', cnic: '12345-6789012-7', status: 'Active' },
      { shopName: 'Ali Truck Shop', name: 'Bidan', number: '12345678905', email: 'bidan123@gmail.com', cnic: '12345-6789012-8', status: 'Active' },
      { shopName: 'Ahmed Spare parts', name: 'Nadeem', number: '12345678912', email: 'nadeem1@gmail.com', cnic: '12345-6789012-9', status: 'Active' }
    ];
  
    filteredUsers = [...this.users]; // Copy for search functionality
    currentPage = 1;
    itemsPerPage = 5;
  
    constructor() {}
  
    ngOnInit(): void {}
  
    // Search function
    onSearch(event: any) {
      const searchTerm = event.target.value.toLowerCase();
      this.filteredUsers = this.users.filter(user =>
        user.shopName.toLowerCase().includes(searchTerm) ||
        user.name.toLowerCase().includes(searchTerm) ||
        user.number.includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm) ||
        user.cnic.includes(searchTerm)
      );
    }
  
    // Pagination function
    get paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredUsers.slice(start, start + this.itemsPerPage);
    }
  
    // Change page
    changePage(page: number) {
      this.currentPage = page;
    }
  
    // Export to Excel
    exportToExcel() {
      const worksheet = XLSX.utils.json_to_sheet(this.users);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');
      XLSX.writeFile(workbook, 'UserManagement.xlsx');
    }
  }
  

