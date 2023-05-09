import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';



@Component({
  selector: 'app-haku-from-hkiopen',
  templateUrl: './haku-from-hkiopen.component.html',
  styleUrls: ['./haku-from-hkiopen.component.css']
})
export class HakuFromHkiopenComponent implements OnInit {

EventList : any;
p: number = 1;
term = '';

horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';

// Aikojen säätöjä
currentDate = new Date(); // tänään
today = new Date();
tomorrowDate = new Date(this.today.setDate(this.today.getDate() + 1)); // huomenna
tomorrow2Date = new Date(this.today.setDate(this.today.getDate() + 1)); // ylihuominen

value = '';

constructor (private hpservice : EventService, private _huomioBar: MatSnackBar) {}

ngOnInit () : void {
  this.getEvents();
}

getEvents() : void {
  this.hpservice.getEvents().subscribe((data: any) => {
    this.EventList = data})

    this._huomioBar.open('Sisältöä ladataan Helsinki Open Apista.', 'OK', {duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
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
  changeReset() {
    this.term = '';
  }
}



