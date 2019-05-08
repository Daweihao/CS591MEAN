import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather} from './weather';
import { User} from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  usersUrl = 'http://localhost:3000/user/';
  constructor(private http: HttpClient) {
  }
  URL = 'http://localhost:3000/hw4/';
  // URL = '/api/hw4/';
  getWeather(name: string): Observable<Weather> {
    // console.log(this.http.get<Cocktail>(this.URL + name));
    return this.http.get<Weather>(this.URL + name);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user._id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, httpOptions);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions);
  }
}
