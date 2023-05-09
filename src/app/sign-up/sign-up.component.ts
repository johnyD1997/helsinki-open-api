import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  firebaseErrorMessage?: boolean;
  signUpForm!: FormGroup;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router, private cookieServ: CookieService){}

  ngOnInit(): void{
    this.firebaseErrorMessage = false;
    this.cookieServ.set('firstname','Joy',{expires:2,sameSite:'None', secure:true})
    this.signUpForm = new FormGroup({
      'name': new FormControl ('', Validators.required),
      'surname': new FormControl ('', Validators.required),
      'email': new FormControl ('', [Validators.required, Validators.email]),
      'password': new FormControl ('', Validators.required)
    });
  }

  signUp(){
    console.log('HEllo')

    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched()
    }
    this.authService.signUpUser(this.signUpForm.value)
    .then((result) => {
      if (result == null) {
        this.router.navigate(['/']);
      }
      return throwError(() =>  new Error('Failed login')); 
    })
    .catch(() => {});
  }

  signInWithGoogle(){
    this.authService.signInWithGoogle();
  }

  signInWithFacebook(){
    this.authService.signInWithFacebook();
  }
}
