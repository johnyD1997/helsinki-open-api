import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment'
import { initializeApp } from 'firebase/app';


@Injectable({
  providedIn: 'root',
})
export class FavoritesService implements OnInit {
  constructor(private afs: AngularFirestore) {}
  currentUser: any;
  app = initializeApp(environment.firebase)

  ngOnInit(): void {
    this.currentUser = localStorage.getItem('token')!;
    console.log(this.currentUser)
  }

  addToFavorites(place: any): Promise<void> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`favorites/${place.placeId}`);
    return userRef.set(place);
  }
}
