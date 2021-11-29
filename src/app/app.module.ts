import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CarListComponent } from './pages/car/car-list/car-list.component';
import { CarEditComponent } from './pages/car/car-edit/car-edit.component';
import { CarDetailComponent } from './pages/car/car-detail/car-detail.component';
import { RideListComponent } from './pages/ride/ride-list/ride-list.component';
import { RideEditComponent } from './pages/ride/ride-edit/ride-edit.component';
import { RideDetailComponent } from './pages/ride/ride-detail/ride-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SafePipe } from './pages/ride/ride-detail/safe.pipe';
import { LoginComponent } from './pages/user/login/login.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { AccountComponent } from './pages/user/account/account.component';
import { CarServiceService } from './services/car-service.service';
import { RideService } from './services/ride.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthInterceptor } from './services/auth.interceptor';
import { FriendsListComponent } from './pages/friends/friends-list/friends-list.component';
import { FriendsAddComponent } from './pages/friends/friends-add/friends-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CarListComponent,
    CarEditComponent,
    CarDetailComponent,
    RideListComponent,
    RideEditComponent,
    RideDetailComponent,
    AboutComponent,
    SafePipe,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    FriendsListComponent,
    FriendsAddComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule { }
