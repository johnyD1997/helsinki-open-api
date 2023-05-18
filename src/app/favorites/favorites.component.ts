import { Component, OnInit } from '@angular/core';
import { Place } from 'src/models/place';
import { FavoritesService } from '../services/favorites.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit{
  favoritePlaces: Place[] = [];
  dafaultPhoto = "assets/images.jpeg"
  constructor(private favoriteService: FavoritesService) {}

  ngOnInit(){
   this.getAllFavorites()
  }

  getAllFavorites(){
    this.favoriteService.getAllFavorites().subscribe(fav => {
      this.favoritePlaces = fav;
      console.log(fav)
    })
  }

  deleteFavorite(placeId: string) {
    this.favoriteService.deleteFavorite(placeId);
  }
}
