import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  firebaseError: boolean; 
  loginForm!: FormGroup;
  constructor(private router: Router, public authService: AuthService){
    this.firebaseError = false;
    this.loginForm = new FormGroup({
      'email': new FormControl ('',Validators.required),
      'password': new FormControl ('', Validators.required)
    })
  }
  ngOnInit(): void{
    
  }

  loginUser(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then((result)=>{
      if(result == null){
        console.log('Login into...')
      } else if(result.isValid == false){
        console.log('page reloaded')
        this.firebaseError = true
      }
    })
  }
}
