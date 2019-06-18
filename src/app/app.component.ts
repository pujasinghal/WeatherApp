import { Component } from '@angular/core';
import { AppService } from './app.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, DatePipe } from '@angular/common/common';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  weatherInfo: any;
  currentData: any;
  cityInfo: any;
  currentDate: any;
  tempInfo: any;

  constructor(public weatherService: AppService) {
  }

  ngOnInit() {
    this.weatherService.getWeatherData()
      .subscribe((data) => {
        this.weatherInfo = data;
        this.currentDate = moment(this.weatherInfo.list[0].dt_txt).format('ddd, D MMM YYYY');
        this.currentData = this.weatherInfo.list[0].main;
        this.tempInfo = this.weatherInfo.list[0].weather[0];
        this.cityInfo = this.weatherInfo.city;
      });
  }

  getKelvinToCelsius(temp) {
    return temp - 273.15;
  };

  getIcon(id) {
    let result = '';
    switch (true) {
      case (id >= 200 && id <= 299):
        result = 'wi-day-thunderstorm';
        break;
      case (id >= 300 && id <= 499):
        result = 'wi-sprinkle';
        break;
      case (id >= 500 && id <= 599):
        result = 'wi-day-rain';
        break;
      case (id >= 600 && id <= 699):
        result = 'wi-snow';
        break;
      case (id >= 701 && id <= 720):
        result = 'wi-smoke';
        break;
      case (id >= 721 && id <= 730):
        result = 'wi-day-haze';
        break;
      case (id >= 731 && id <= 740):
        result = 'wi-dust';
        break;
      case (id >= 741 && id <= 750):
        result = 'wi-day-fog';
        break;
      case (id >= 751 && id <= 761):
        result = 'wi-sandstorm';
        break;
      case (id >= 762 && id <= 780):
        result = 'wi-volcano';
        break;
      case (id >= 781 && id <= 799):
        result = 'wi-tornado';
        break;
      case id == 800:
        result = 'wi-day-sunny';
        break;
      case (id >= 800 && id <= 804):
        result = 'wi-day-cloudy';
        break;
      default:
        result = 'wi-day-sunny';
        break;

    }
    return result;
  }
}
