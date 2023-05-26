import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { faStar, faHashtag, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Place } from 'src/models/place';
import { FavoritesService } from '../services/favorites.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor (private hpservice : ActivityService, private _huomioBar: MatSnackBar, private favoritesService: FavoritesService) {}

  Star = faStar;
  Hashtag = faHashtag;
  Globe = faGlobe;


  activityList : any;
  p: number = 1;
  term = '';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities() : void {
    this.hpservice.getActivities().subscribe((data: any) => {
      this.activityList = data})

      this._huomioBar.open('Sisältöä ladataan Helsinki Open Apista.', 'OK', {duration: 3000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition
      })
  }

  // Button functions
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

}
