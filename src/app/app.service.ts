import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
  configUrl : string = 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?id=1259229&cnt=5&appid=9723f3d0a2a6b10bb72a092e2df13c25';
  constructor(public http: HttpClient) {}

  getWeatherData() {
    return this.http.get(this.configUrl);
  }
}
