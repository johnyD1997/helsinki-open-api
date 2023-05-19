import { Component, OnInit } from '@angular/core';
import { AvatarsService } from '../services/avatars.service';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{
currentUser: any;
avatars: string[] = [];
changeName!: FormGroup;

  ngOnInit(): void {
      let loggedUser = JSON.parse(localStorage.getItem('user')!);
      this.avatars = this.avatarService.getAllAvatars() 
      this.auth.getUserData(loggedUser.uid).then((user)=>{
        this.currentUser = user;
      })

      this.changeName = new FormGroup({
      'name': new FormControl(''),
      'surname': new FormControl(''),
      });
    };

    constructor(public avatarService: AvatarsService, private auth: AuthService, private router: Router){ }

    updateAvatar(src: string){
      let userId = this.currentUser.uid
      this.avatarService.updateAvatar(src, userId).then(()=>{
        this.ngOnInit();
      });
    }

    updateName(){
      this.auth.updateName(this.changeName.value).then(()=>{
        this.ngOnInit();
      })
    }

    deleteUser(){
      this.auth.deleteUser(this.currentUser.uid);
      this.router.navigate(['/']);
    }

}
