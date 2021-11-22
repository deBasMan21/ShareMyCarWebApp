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
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule } from '@angular/common/http';

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
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
