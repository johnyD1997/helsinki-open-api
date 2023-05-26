import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { faStar, faHashtag, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../services/favorites.service';
import { Place } from 'src/models/place';


@Component({
  selector: 'app-haku-from-hkiopen',
  templateUrl: './haku-from-hkiopen.component.html',
  styleUrls: ['./haku-from-hkiopen.component.css']
})
export class HakuFromHkiopenComponent implements OnInit {

Star = faStar;
Hashtag = faHashtag;
Globe = faGlobe;

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

constructor (private hpservice : EventService, private _huomioBar: MatSnackBar, private favoritesService: FavoritesService) {}

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

// ADD TO FAVORITES FUNCTIONS
 
addToFavorites(_name: string, _id: string, _url: string, _vicinity: string, _photo: string){
  let place: Place = {
    photo: _photo,
    name: _name,
    id: _id,
    url: _url,
    vicinity: _vicinity,
  }

  this.favoritesService.addToFavorites(place)
  console.log('Adding to favorite')

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



