import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ErrorService } from 'src/app/services/error.service';
import { RideService } from 'src/app/services/ride.service';
import { Location } from '../../location/location.model';
import { User } from '../../user/user.model';
import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-edit',
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.scss'],
})
export class RideEditComponent implements OnInit {
  public showForm: boolean = false;
  public id: String = '';
  public carId: String = '';
  public beginDateTimeString = '';
  public endDateTimeString = '';
  public ride: Ride = {
    _id: '',
    name: '',
    beginDateTime: new Date(),
    endDateTime: new Date(),
    destination: new Location('', '', '', ''),
    user: new User('', '', '', '', []),
    reservationDateTime: new Date(),
  };

  constructor(
    public route: ActivatedRoute,
    private rideService: RideService,
    private router: Router,
    private authService: AuthenticationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.showError = false;

    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.carId = params['carId'];
      if (this.id != undefined) {
        this.rideService.getRideById(this.id).subscribe((ride) => {
          if (ride._id) {
            this.ride = ride;
            this.beginDateTimeString = ride.beginDateTime
              .toLocaleString()
              .replace('Z', '');
            this.endDateTimeString = ride.endDateTime
              .toLocaleString()
              .replace('Z', '');
            this.authService.getUser().subscribe((user) => {
              if (user.email) {
                if (this.ride.user.email == user.email) {
                  this.showForm = true;
                }
              } else {
                this.errorService.showError = true;
              }
            });
          } else {
            this.errorService.showError = false;
          }
        });
      } else {
        this.showForm = true;
      }
    });
  }

  async submit(): Promise<void> {
    //date from input field parsed to date objects
    this.ride.beginDateTime = new Date(this.beginDateTimeString);
    this.ride.endDateTime = new Date(this.endDateTimeString);

    //see if ride is new or updating
    if (this.id != undefined) {
      //updates ride
      this.rideService.updateRide(this.ride, this.id).subscribe((ride) => {
        if (ride._id) {
          this.router.navigate([`/ride/${ride._id}`]);
        } else {
          this.errorService.showError = true;
        }
      });
    } else {
      //creates ride
      this.rideService.addRide(this.ride, this.carId).subscribe((ride) => {
        if (ride._id) {
          this.router.navigate([`/ride/${ride._id}`]);
        } else {
          this.errorService.showError = true;
        }
      });
    }
  }
}
