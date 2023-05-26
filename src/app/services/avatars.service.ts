import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AvatarsService {
  currentUser: any;
  userUid: any;

  constructor(private firestore: AngularFirestore) {
    this.currentUser = JSON.parse(localStorage.getItem('user')!)
    if(this.currentUser !== null){
      this.userUid = this.currentUser.uid;
      console.log(this.currentUser.uid)
    }
   }

  avatars = [
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-01.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-02.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-03.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-04.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-05.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-06.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-07.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-08.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-09.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-10.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-11.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-12.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-13.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-14.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-15.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-16.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-17.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-18.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-19.png',
    'assets/avatars/Artboards_Diversity_Avatars_by_Netguru-20.png',
  ]

  setAvatar(): string{
    let randomNumer = Math.floor(Math.random() * this.avatars.length)
    return this.avatars[randomNumer];
  }

  getAllAvatars(){
    return this.avatars;
  }

  updateAvatar(newAvatar: string, userUid: string): Promise<any>{
    return this.firestore.collection('users').doc(userUid).update({imgUrl: newAvatar})
  }
}
