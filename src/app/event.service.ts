import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  // see configured route in proxy.conf.json -file
  // https://open-api.myhelsinki.fi/v1/events/
  //

  constructor(private EventHTTP: HttpClient) { }

 // test_url = "/events?page=$1&limit=150";
  BASEURL = 'https://api.codetabs.com/v1/proxy/?quest=https://open-api.myhelsinki.fi/v1/events/';


  getEvents(): any {
 // const events = this.EventHTTP.get('/events');
  const events = this.EventHTTP.get(this.BASEURL);
  return events;
  }
}
