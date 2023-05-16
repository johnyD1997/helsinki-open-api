import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NavigationEnd, Router } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';

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

