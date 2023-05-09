import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],

})
export class PlacesComponent implements OnInit {

PlaceList : any;
p: number = 1;
term = '';
content: string = "long form of text display"

horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';

constructor(private hpservice : PlaceService, private _huomioBar: MatSnackBar){}

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
}
