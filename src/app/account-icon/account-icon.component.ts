import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons' 
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-account-icon',
  templateUrl: './account-icon.component.html',
  styleUrls: ['./account-icon.component.css']
})
export class AccountIconComponent implements OnInit{
  isVisible = false;
  imgUrl: any;
  facircleuser = faCircleUser;
  user: any;
  constructor(private afAuth: AngularFireAuth, private auth: AuthService){}
  
  ngOnInit(){
    this.auth.loginStatusChange().subscribe(loggedIn => {
      if(loggedIn){
        this.fetchUserData()
      }
    })
    this.fetchUserData();
  }

  fetchUserData(){
    let currentUser = JSON.parse(localStorage.getItem('user')!)
    this.user = currentUser
    console.log(this.user.name)
    this.imgUrl = this.user?.imgUrl;
  }

  logout(){
    this.auth.signOut();
    this.isVisible = false;
  }
}
