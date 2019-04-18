import { Component, OnInit } from '@angular/core';
import { WeatherService} from '../weather.service';
import { Weather} from '../weather';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  area = 'boston';
  weather: Weather;

  constructor(private weatherServce: WeatherService) { }


  ngOnInit() {
    this.weatherServce.getWeather(this.area).subscribe(weather => this.weather = weather);
  }

}
