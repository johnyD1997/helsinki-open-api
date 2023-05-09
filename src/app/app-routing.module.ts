import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { AlldataComponent } from './alldata/alldata.component';
import { HakuFromHkiopenComponent } from './haku-from-hkiopen/haku-from-hkiopen.component'; // THIS IS EVENT
import { LoginComponent } from './login/login.component';
import { PlacesComponent } from './places/places.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MapScreenComponent } from './components/map-screen/map-screen.component';

const routes: Routes = [
{path: '', component : MapScreenComponent},
{path: 'events', component : HakuFromHkiopenComponent},
{path: 'places', component : PlacesComponent},
{path: 'activities', component : ActivitiesComponent},
{path: 'alldata', component : AlldataComponent},
{path: 'login', component: LoginComponent},
{path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
