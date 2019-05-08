import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getUsers();
  }


  private getUsers() {
    return this.weatherService.getUsers().subscribe(
      users => {
        console.log(users);
        this.users = users;
      }
    );
  }
}
