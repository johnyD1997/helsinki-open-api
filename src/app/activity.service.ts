import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private ActivityHTTP : HttpClient) { }

  // test_url = "/places?page=$1&limit=30";
  BASEURL = 'https://api.codetabs.com/v1/proxy/?quest=https://open-api.myhelsinki.fi/v1/activities/';

  getActivities(): any {
 // const activities = this.ActivityHTTP.get('/activities');
  const activities = this.ActivityHTTP.get(this.BASEURL);
  return activities;
  }
}
