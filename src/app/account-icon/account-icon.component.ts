import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons' 
import { AuthService } from '../services/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-account-icon',
  templateUrl: './account-icon.component.html',
  styleUrls: ['./account-icon.component.css']
})
export class AccountIconComponent implements OnInit{
  isVisible = false;
  user: any;
  constructor(private afAuth: AngularFireAuth, private auth: AuthService, private authService: AuthService){
    this.authService.loggedIn.subscribe(user => this.user = user)
    this.ngOnInit()
  }

  ngOnInit(){
      this.fetchUserData()
  }
  

  fetchUserData(){
    let currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = currentUser
  }

  logout(){
    this.auth.signOut();
    this.isVisible = false;
  }
}
