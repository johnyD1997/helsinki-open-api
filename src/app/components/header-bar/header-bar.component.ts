import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent {
imgUrl ='assets/logo.png';
url: any;
constructor(public auth: AngularFireAuth , private router: Router){ }

  hasRoute(route: string){
   return this.router.url.includes(route)
  }
}

