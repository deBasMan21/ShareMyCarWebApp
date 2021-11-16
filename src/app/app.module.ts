import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserDetailComponent } from './pages/user/user-detail/user-detail.component';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { CarDetailComponent } from './pages/car/car-detail/car-detail.component';
import { RideListComponent } from './pages/ride/ride-list/ride-list.component';
import { RideEditComponent } from './pages/ride/ride-edit/ride-edit.component';
import { RideDetailComponent } from './pages/ride/ride-detail/ride-detail.component';
import { LocationListComponent } from './pages/location/location-list/location-list.component';
import { LocationDetailComponent } from './pages/location/location-detail/location-detail.component';
import { LocationEditComponent } from './pages/location/location-edit/location-edit.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    NavComponent,
    FooterComponent,
    CarListComponent,
    CarEditComponent,
    CarDetailComponent,
    RideListComponent,
    RideEditComponent,
    RideDetailComponent,
    LocationListComponent,
    LocationDetailComponent,
    LocationEditComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
