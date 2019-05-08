import { Component, OnInit } from '@angular/core';
import {USERS} from '../users';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = USERS;
  newUser: User = {
    name: '',
    location: '',
    email: ''
  };

  constructor() { }

  ngOnInit() {
  }
  addUser() {
    this.users.push(this.newUser);
    this.newUser = {
      name: '',
      location: '',
      email: ''
    };
  }

}
