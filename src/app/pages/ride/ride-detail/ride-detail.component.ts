import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride.model';
import { Car } from '../../car/car.model';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Location } from '../../location/location.model';
import { RideService } from 'src/app/services/ride.service';
import { User } from '../../user/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss'],
})
export class RideDetailComponent implements OnInit {
  public rideDone: boolean = false;
  isOwner: boolean = false;
  id: String = '';
  ride: Ride = {
    _id: '',
    name: '',
    beginDateTime: new Date(2021, 11, 11, 12),
    endDateTime: new Date(2021, 11, 11, 14),
    destination: new Location('', '', '', ''),
    reservationDateTime: new Date(2021, 12, 11, 12),
    user: new User('', '', '', '', []),
  };

  positionMap = {
    street: '',
    num: '',
    city: '',
  };

  mapsURL = '';

  car: Car = {
    _id: '',
    name: '',
    plate: '',
    imageSrc: '',
    reservations: [],
    isOwner: null,
  };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService,
    private rideService: RideService,
    private router: Router,
    private authService: AuthenticationService,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.showError = false;

    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.carService.getCarForRide(this.id).subscribe((res) => {
        if (res.plate) {
          this.car = res;
        } else {
          this.errorService.showError = true;
        }
      });
      this.rideService.getRideById(this.id).subscribe((res) => {
        if (res._id) {
          this.ride = res as Ride;
          this.createDates(res);
          this.generateMapsUrl();
          this.authService.getUser().subscribe((user) => {
            if (user.email) {
              if (this.ride.user.email == user.email) {
                this.isOwner = true;
              }
              this.rideDone = true;
            } else {
              this.errorService.showError = true;
            }
          });
        } else {
          this.errorService.showError = true;
        }
      });
    });
  }

  deleteRide(): void {
    this.rideService
      .deleteRideFromCar(this.id, this.car._id!)
      .subscribe((res) => {
        if (res._id) {
          this.router.navigate([`/car/${this.car._id}`]);
        } else {
          this.errorService.showError = true;
        }
      });
  }

  generateMapsUrl() {
    this.positionMap.city = this.ride.destination.city;
    this.positionMap.street = this.ride.destination.address;
    let firstDigit: any = this.ride.destination.address.match(/\d/);
    let index: number = this.ride.destination.address.indexOf(firstDigit);
    this.positionMap.num = this.ride.destination.address.substring(
      index,
      this.ride.destination.address.length
    );
    this.positionMap.street = this.ride.destination.address
      .substring(0, index)
      .trim();

    this.mapsURL = `https://maps.google.com/maps?q=${this.positionMap.street}%20${this.positionMap.num}%20%${this.positionMap.city}&t=&z=20&ie=UTF8&iwloc=&output=embed`;
  }

  createDates(res: any) {
    this.ride.beginDateTime = new Date(res.beginDateTime);
    this.ride.endDateTime = new Date(res.endDateTime);
    this.ride.reservationDateTime = new Date(res.reservationDateTime);
  }
}
