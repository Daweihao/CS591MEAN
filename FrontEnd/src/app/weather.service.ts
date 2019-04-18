import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather} from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {
  }
  URL = 'http://localhost:3000/hw4/';
  getWeather(name: string): Observable<Weather> {
    // console.log(this.http.get<Cocktail>(this.URL + name));
    return this.http.get<Weather>(this.URL + name);
  }
}
