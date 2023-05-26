import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionData, collection } from '@angular/fire/firestore';
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { Observable, of } from 'rxjs';

import { Place } from 'src/models/place';
import { AuthService } from './auth.service';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService implements OnInit{
  currentUser: any;
  userUid: any;
  db = getFirestore();
  user: any;

  constructor(private firestore: AngularFirestore, private authService: AuthService) {
    this.authService.loggedIn.subscribe(user => this.user = user)
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);

    if (this.currentUser !== null) {
      this.user = this.currentUser;
    }
  }

  addToFavorites(place: any) {
    const collectionRef = doc(this.db, 'users', this.user.uid, 'favorites', place.id)
    setDoc(collectionRef, place)
  }

  getAllFavorites(): Observable<Place[]> {
    const userRef = doc(this.db, 'users', this.user.uid);
    const favoritesRef = collection(userRef, 'favorites');
    return collectionData(favoritesRef, { idField: 'id' }) as Observable<
      Place[]
    >;
  }

  deleteFavorite(placeId: string) {
    const docRef = doc(this.db, 'users', this.user.uid, 'favorites', placeId);
    deleteDoc(docRef);
  }
}
