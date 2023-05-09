import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getweather(city: string, units: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' +  city +'&appid=35888c385a67b11bbcc2bb25714d13c2&units=' + units);
  }

    // Forecast Helsinki
    ForecastHelsinkiUrl ='https://api.weatherapi.com/v1/forecast.json?key=7036cc1503804fb8ade110135233103&q=Helsinki&days=1&aqi=no&alerts=yes';
    getHelsinkiForecastData(): Observable<any> {
      return this.http.get<any>(this.ForecastHelsinkiUrl)
    }
}