import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router'
import { User } from 'src/models/user';
import { GoogleAuthProvider, FacebookAuthProvider } from "@angular/fire/auth";
import { getAuth, signInWithRedirect } from 'firebase/auth';
import { CookieService } from 'ngx-cookie-service';
import firebase from 'firebase/compat/app';
import {doc, getDoc, getFirestore } from 'firebase/firestore';
import { ReturnStatement } from '@angular/compiler';
import { Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  userLoggedIn?: boolean;
  private loggedIn: Subject<boolean> = new ReplaySubject<boolean>(1);
  
  constructor(private afAuth: AngularFireAuth, private router: Router, public firestore: AngularFirestore, private cookieServ: CookieService) { 
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
        email: user.email
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

  async getUserData(uid: any){
  //  return firebase.firestore().collection('users').doc(uid).get().then((doc) =>{
  //       localStorage.setItem('user', JSON.stringify(doc.data()))
  //       JSON.parse(localStorage.getItem('user')!);
  //   })

  // return this.firestore.collection('users').doc(` ${uid}`).get().subscribe((doc)=>{
  //   localStorage.setItem('user', JSON.stringify(doc.data()))
  //   })
    const db = getFirestore();
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      return localStorage.setItem('user', JSON.stringify(docSnap.data()));
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

  signInWithFacebook(){
    return this.afAuth.signInWithPopup(new FacebookAuthProvider)
    .then(res=>{
      this.router.navigate(['']);
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
    })
    .catch((error)=>{
      alert(error.message)
     })
  }

  login(email: string, password: string): Promise<any>{
    return this.afAuth.signInWithEmailAndPassword(email, password).then((res)=>{
      console.log('You are in');
      this.router.navigate(['']);
      localStorage.setItem('token', res.user?.uid!)
      this.getUserData(res.user?.uid!)
      this.loggedIn.next(true)
    })
  }

  signOut(){
    this.afAuth.signOut().then(()=>{
      this.loggedIn.next(false)
    })
  }

  loginStatusChange(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
}