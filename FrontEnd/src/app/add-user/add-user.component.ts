import { Component, OnInit } from '@angular/core';
import { User} from '../user';
import { WeatherService} from '../weather.service';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user = new User() ;
  submitted = false;
  message: string;

  constructor(
    private weatherService: WeatherService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('_id');
    this.weatherService.getUser(id)
      .subscribe(user => this.user = user);
  }

  update(): void {
    this.submitted = true;
    this.weatherService.updateUser(this.user)
      .subscribe(result => this.message = 'User Updated Successfully!');
  }

  delete(): void {
    this.submitted = true;
    this.weatherService.deleteUser(this.user._id)
      .subscribe(result => this.message = 'User Deleted Successfully!');
  }

  goBack(): void {
    this.location.back();
  }
}
