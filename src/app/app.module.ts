import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { HakuFromHkiopenComponent } from './haku-from-hkiopen/haku-from-hkiopen.component';
import { PlacesComponent } from './places/places.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AlldataComponent } from './alldata/alldata.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- pagination module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AccountComponent } from './account/account.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';

import { WeatherComponent } from './weather/weather.component';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListBarComponent } from './components/list-bar/list-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    HakuFromHkiopenComponent,
    PlacesComponent,
    NavbarComponent,
    ActivitiesComponent,
    AlldataComponent,
    SignUpComponent,
    LoginComponent,
    HeaderBarComponent,
    MapScreenComponent,
    AccountComponent,
    AccountIconComponent,
    FavoritesComponent,
    FooterComponent,
    WeatherComponent,
    ListBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    Ng2SearchPipeModule,
    GoogleMapsModule,
    FontAwesomeModule,
    CommonModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [AuthService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
