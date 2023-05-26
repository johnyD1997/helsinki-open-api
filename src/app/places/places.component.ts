import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { faStar, faHashtag, faArrowUpRightFromSquare, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FavoritesService } from '../services/favorites.service';
import { Place } from 'src/models/place';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],

})
export class PlacesComponent implements OnInit {

  Star = faStar;
  Hashtag = faHashtag;
  ArrowUpRight = faArrowUpRightFromSquare;
  Globe = faGlobe;

PlaceList : any;
p: number = 1;
term = '';
content: string = "long form of text display"

horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';

constructor(private hpservice : PlaceService, private _huomioBar: MatSnackBar, public favoritesService: FavoritesService){}

ngOnInit(): void {
  this.getPlaces();
}

getPlaces() : void {
  this.hpservice.getPlaces().subscribe((data: any) => {
    this.PlaceList = data})

    this._huomioBar.open('Sisältöä ladataan Helsinki Open Apista.', 'OK', {duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    })
}

  // Button functions
  changeTermShopping() {
    this.term = 'Shopping';
  }
  changeTermRestaurantsAndCafes() {
    this.term = 'RESTAURANTS & CAFES';
  }
  changeTermSights() {
    this.term = 'SIGHTS & ATTRACTIONS';
  }
  changeTermBookClubs() {
    this.term = 'book clubs';
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
