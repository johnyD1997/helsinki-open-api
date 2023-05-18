import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collectionData, collection } from '@angular/fire/firestore';
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { Observable, of } from 'rxjs';

import { Place } from 'src/models/place';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  currentUser: any;
  userUid: any;
  db = getFirestore();

  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!);

    if (this.currentUser !== null) {
      this.userUid = this.currentUser.uid;
    }
  }

  addToFavorites(place: any) {
    const collectionRef = doc(
      this.db,
      'users',
      this.userUid,
      'favorites',
      place.placeId
    );
    setDoc(collectionRef, place);
  }

  getAllFavorites(): Observable<Place[]> {
    const userRef = doc(this.db, 'users', this.userUid);
    const favoritesRef = collection(userRef, 'favorites');
    return collectionData(favoritesRef, { idField: 'id' }) as Observable<
      Place[]
    >;
  }

  deleteFavorite(placeId: string) {
    const docRef = doc(this.db, 'users', this.userUid, 'favorites', placeId);
    deleteDoc(docRef);
  }
}
