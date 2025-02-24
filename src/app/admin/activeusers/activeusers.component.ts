import { Component } from '@angular/core';
interface User {
  name: string;
  number: string;
  email: string;
  profilePicture: string;
}
@Component({
  selector: 'app-activeusers',
  standalone: false,
  
  templateUrl: './activeusers.component.html',
  styleUrl: './activeusers.component.css'
})
export class ActiveusersComponent {
  users: User[] = [
    { name: 'Salim', number: '03213456783', email: 'salim123@gmail.com', profilePicture: 'assets/salim.jpg' },
    { name: 'Zubair', number: '12345678976', email: 'remani2@gmail.com', profilePicture: 'assets/zubair.jpg' },
    { name: 'Arman', number: '34567893323', email: 'am323@gmail.com', profilePicture: 'assets/arman.jpg' },
    { name: 'Aziz', number: '12345678976', email: 'khan56@gmail.com', profilePicture: 'assets/aziz.jpg' },
    { name: 'Perwez', number: '12345678912', email: 'perwezali8@gmail.com', profilePicture: 'assets/perwez.jpg' },
    { name: 'Bidan', number: '12345678912', email: 'bidan123@gmail.com', profilePicture: 'assets/bidan.jpg' },
    { name: 'Nadeem', number: '12345678912', email: 'nadeem1@gmail.com', profilePicture: 'assets/nadeem.jpg' },
  ];
}
