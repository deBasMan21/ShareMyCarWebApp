import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './pages/car/car-detail/car-detail.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { LocationDetailComponent } from './pages/location/location-detail/location-detail.component';
import { LocationEditComponent } from './pages/location/location-edit/location-edit.component';
import { LocationListComponent } from './pages/location/location-list/location-list.component';
import { RideDetailComponent } from './pages/ride/ride-detail/ride-detail.component';
import { RideEditComponent } from './pages/ride/ride-edit/ride-edit.component';
import { RideListComponent } from './pages/ride/ride-list/ride-list.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },

  { path: 'user', pathMatch: 'full', component: UserListComponent },
  { path: 'user/:id', pathMatch: 'full', component: UserDetailComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserEditComponent },

  { path: 'car', pathMatch: 'full', component: CarListComponent },
  { path: 'car/add', pathMatch: 'full', component: CarEditComponent },
  { path: 'car/:id', pathMatch: 'full', component: CarDetailComponent },
  { path: 'car/:id/edit', pathMatch: 'full', component: CarEditComponent },

  { path: 'ride', pathMatch: 'full', component: RideListComponent },
  { path: 'ride/add', pathMatch: 'full', component: RideEditComponent },
  { path: 'ride/:id', pathMatch: 'full', component: RideDetailComponent },
  { path: 'ride/:id/edit', pathMatch: 'full', component: RideEditComponent },

  { path: 'location', pathMatch: 'full', component: LocationListComponent },
  { path: 'location/add', pathMatch: 'full', component: LocationEditComponent },
  { path: 'location/:id', pathMatch: 'full', component: LocationDetailComponent },
  { path: 'location/:id/edit', pathMatch: 'full', component: LocationEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
