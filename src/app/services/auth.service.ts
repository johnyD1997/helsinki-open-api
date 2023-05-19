import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import { User } from 'src/models/user';
import { GoogleAuthProvider, FacebookAuthProvider } from "@angular/fire/auth";
import { CookieService } from 'ngx-cookie-service';
import {doc, getDoc, getFirestore } from 'firebase/firestore';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { AvatarsService } from './avatars.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  userLoggedIn?: boolean;
  public loggedIn = new Subject()
  userId: any;
  
  constructor(private afAuth: AngularFireAuth, private router: Router, public firestore: AngularFirestore, private cookieServ: CookieService, private avatar: AvatarsService) { 
    this.afAuth.authState.subscribe((user)=>{
      this.userLoggedIn = false
      if(user){
        this.userLoggedIn = true;
      }else{
        this.userLoggedIn = false
      }
    })
  }



  signUpUser(user: any): Promise<any>{
    return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
    .then((result)=> {
      this.userLoggedIn = true;
      const newUser: User = {
        uid: result.user?.uid,
        name: user.name,
        surname: user.surname,
        email: user.email,
        imgUrl: this.avatar.setAvatar()
      }
      localStorage.setItem('user', JSON.stringify(newUser))
      this.setUserData(newUser);
    })
    .catch((error)=>{
      console.log('Auth Service: signup error', error);
      if(error.code){
        return { isValid: false, message: error.message };
      }
      return error.message;
    })
  }

  setUserData(user: any){
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(`users/${user.uid}`);
    return userRef.set(user);
  }

  async getUserData(uid: any): Promise<any>{
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    localStorage.setItem('user', JSON.stringify(docSnap.data()));
    if(docSnap.exists()){
      this.loggedIn.next(docSnap.data())
      return docSnap.data();
    }else{
      return console.log('No such document');
    }

  }

  signInWithGoogle(){
   return this.afAuth.signInWithPopup(new GoogleAuthProvider).then((res)=>{
    
   })
   .catch((error)=>{
    alert(error.message)
   })
  }
  
  login(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then((res)=>{
      console.log('You are in');
      this.router.navigate(['']);
      localStorage.setItem('user', JSON.stringify(res.user!));
      this.userId = res.user?.uid!
      this.getUserData(res.user?.uid!)
    })
  }

  signOut(){
    this.afAuth.signOut().then(()=>{
      this.loggedIn.next(false)
      localStorage.removeItem('user');
      this.router.navigate(['/'])
    })
  }


  updateName(userInfo: any) : Promise<any> {
    let user = JSON.parse(localStorage.getItem('user')!)
    return this.firestore.collection('users').doc(user.uid).update({name: userInfo.name, surname: userInfo.surname});
  }
}
