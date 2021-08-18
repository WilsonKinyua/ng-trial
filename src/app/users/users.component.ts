import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  users: User[] = [
    {
      id: 1,
      name: 'Wilson Kinyua',
      age: 23,
      bio: 'Just my bio',
    },
    {
      id: 2,
      name: 'Wilson Kinyua2',
      age: 24,
      bio: 'Just my bio2',
    },
    {
      id: 3,
      name: 'Wilson Kinyua3',
      age: 25,
      bio: 'Just my bio3',
    },
    {
      id: 4,
      name: 'Wilson Kinyua4',
      age: 26,
      bio: 'Just my bio4',
    },
    {
      id: 5,
      name: 'Wilson Kinyua5',
      age: 27,
      bio: 'Just my bio5',
    },
  ];
}
