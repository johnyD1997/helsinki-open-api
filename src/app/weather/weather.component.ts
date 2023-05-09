import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  ReadMore:boolean = true
  visible:boolean = false

  onclick()
  {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }

  Math = Math;

  helsinkiforecastweather : any;

  myWeather: any;
  temperature: number = 0;
  feelsLikeTemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconURL: string = '';
  city: string = 'Helsinki';
  units: string = 'metric'

constructor(private weatherService: WeatherService) { }

ngOnInit(): void {
  this.weatherService.getweather(this.city, this.units).subscribe({

    next: (res) => {
      console.log(res);
      this.myWeather = res;
      console.log(this.myWeather);
      this.temperature = this.myWeather.main.temp;
      this.feelsLikeTemp = this.myWeather.main.feels_like;
      this.humidity = this.myWeather.main.humidity;
      this.pressure = this.myWeather.main.pressure;
      this.summary = this.myWeather.weather[0].main;
      
      this.iconURL = 'https://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png';
    },

    error: (error) => console.log(error.message),

    complete: () => console.info('API call completed')
  })
  // forecast helsinki
  this.getForecastHelsinki();
}

  // Weather Forecast Helsinki
  getForecastHelsinki(): void {
    this.weatherService.getHelsinkiForecastData().subscribe ((data: any) =>{
      this.helsinkiforecastweather = data;
    })
  }  

}
