import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarDetailComponent } from './pages/car/car-detail/car-detail.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { RideDetailComponent } from './pages/ride/ride-detail/ride-detail.component';
import { RideEditComponent } from './pages/ride/ride-edit/ride-edit.component';
import { RideListComponent } from './pages/ride/ride-list/ride-list.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },

  { path: 'about', pathMatch: 'full', component: AboutComponent },

  { path: 'user', pathMatch: 'full', component: UserListComponent },
  { path: 'user/:id', pathMatch: 'full', component: UserDetailComponent },
  { path: 'user/:id/edit', pathMatch: 'full', component: UserEditComponent },

  { path: 'car', pathMatch: 'full', component: CarListComponent },
  { path: 'car/add', pathMatch: 'full', component: CarEditComponent },
  { path: 'car/:id', pathMatch: 'full', component: CarDetailComponent },
  { path: 'car/:id/edit', pathMatch: 'full', component: CarEditComponent },

  { path: 'ride', pathMatch: 'full', component: RideListComponent },
  { path: 'car/:carId/ride/add', pathMatch: 'full', component: RideEditComponent },
  { path: 'ride/:id', pathMatch: 'full', component: RideDetailComponent },
  { path: 'ride/:id/edit', pathMatch: 'full', component: RideEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
