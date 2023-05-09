import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  // see configured route in proxy.conf.json -file
  // https://open-api.myhelsinki.fi/v1/places/
  //

  constructor(private PlaceHTTP: HttpClient) { }

  // testing haetaan vain 50 paikkaa!
  //test_url = "/places?page=$1&limit=50";
  BASEURL = 'https://api.codetabs.com/v1/proxy/?quest=https://open-api.myhelsinki.fi/v1/places/';

  getPlaces(): any {
   // const places = this.PlaceHTTP.get('/places');
   const places = this.PlaceHTTP.get(this.BASEURL);
   return places;
  }

  
  haePaikat(page: number): any {
    return this.PlaceHTTP.get(
      `/places?page=${page}&limit=5`
    );
  }
}
