import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CarDetailComponent } from './pages/car/car-detail/car-detail.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { RideDetailComponent } from './pages/ride/ride-detail/ride-detail.component';
import { RideEditComponent } from './pages/ride/ride-edit/ride-edit.component';
import { RideListComponent } from './pages/ride/ride-list/ride-list.component';
import { AccountComponent } from './pages/user/account/account.component';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'car' },

  { path: 'about', pathMatch: 'full', component: AboutComponent },

  { path: 'car', pathMatch: 'full', component: CarListComponent },
  { path: 'car/add', pathMatch: 'full', component: CarEditComponent },
  { path: 'car/:id', pathMatch: 'full', component: CarDetailComponent },
  { path: 'car/:id/edit', pathMatch: 'full', component: CarEditComponent },

  { path: 'ride', pathMatch: 'full', component: RideListComponent },
  { path: 'car/:carId/ride/add', pathMatch: 'full', component: RideEditComponent },
  { path: 'ride/:id', pathMatch: 'full', component: RideDetailComponent },
  { path: 'ride/:id/edit', pathMatch: 'full', component: RideEditComponent },

  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'register', pathMatch: 'full', component: RegisterComponent },
  { path: 'account', pathMatch: 'full', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
