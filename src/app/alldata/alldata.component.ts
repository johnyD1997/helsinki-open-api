import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { EventService } from '../event.service';
import { PlaceService } from '../place.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';


@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent implements OnInit {

  pe: number = 1; // page events
  pp: number = 1; // page places
  pa: number = 1; // page activities

  term = '';
  moreplaces: any;
  moreevents: any;
  moreactivity: any;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

// Aikojen säätöjä
currentDate = new Date(); // tänään
today = new Date();
tomorrowDate = new Date(this.today.setDate(this.today.getDate() + 1)); // huomenna
tomorrow2Date = new Date(this.today.setDate(this.today.getDate() + 1)); // ylihuominen

  constructor(private activityservice : ActivityService, 
    private eventservice : EventService, private placeservice : PlaceService,
    private _huomioBar: MatSnackBar) {}

  activityList : any;
  eventList : any;
  placeList : any;

  ngOnInit(): void {
    this.getActivity();
    this.getEvent();
    this.getPlace();

    this._huomioBar.open('Sisältöä ladataan Helsinki Open Apista.', 'OK', {duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition});

  }

  getActivity() : void {
    this.activityservice.getActivities().subscribe((data: any) => {
      this.activityList = data;
    })
  }

  getEvent() : void {
    this.eventservice.getEvents().subscribe((data: any) => {
      this.eventList = data;
    })
  }

  getPlace() : void {
    this.placeservice.getPlaces().subscribe((data: any) => {
      this.placeList = data;
    })
  }

  // Button functions

// Ylihuomenna
changeToday2() {
  const date = new Date(this.tomorrow2Date);
  this.term = date.toLocaleDateString();
}

// Huomenna
changeToday1() {
  const date = new Date(this.tomorrowDate);
  this.term = date.toLocaleDateString();
}

// Tänään
changeToday(){
  const date = new Date(this.currentDate);
  this.term = date.toLocaleDateString();
}

  // Button functions
  changeTermBookClubs() {
    this.term = 'book clubs';
  }
  changeTermHeavyMetal() {
    this.term = 'heavy metal';
  }
  changeTermRock() {
    this.term = 'rock';
  }
  changeTermHiphop() {
    this.term = 'hip hop';
  }
  changeTermEducation() {
    this.term = 'education';
  }
  changeTermGeneral() {
    this.term = 'general';
  }
  changeTermShopping() {
    this.term = 'Shopping';
  }
  changeTermRestaurantsAndCafes() {
    this.term = 'RESTAURANTS & CAFES';
  }
  changeTermSights() {
    this.term = 'SIGHTS & ATTRACTIONS';
  }
  changeTermNature() {
    this.term = 'Nature';
  }
  changeTermSauna() {
    this.term = 'Sauna';
  }
  changeTermDaytrip() {
    this.term = 'Daytrip';
  }
  changeTermHistory() {
    this.term = 'History';
  }
  changeReset() {
    this.term = '';
  }


}
