import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride.model';
import { Car } from '../../car/car.model';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Location } from '../../location/location.model';
import { RideService } from 'src/app/services/ride.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss'],
})
export class RideDetailComponent implements OnInit {
  id: String = '';
  ride: Ride = {
    _id: '',
    name: '',
    beginDateTime: new Date(2021, 11, 11, 12),
    endDateTime: new Date(2021, 11, 11, 14),
    destination: new Location('', '', '', ''),
    reservationDateTime: new Date(2021, 12, 11, 12),
    user: null
  };

  car: Car = {
    _id: '',
    name: '',
    plate: '',
    imageSrc:
      '',
    reservations: []
  };

  constructor(public route: ActivatedRoute, private carService: CarServiceService, private rideService: RideService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.carService.getCarForRide(this.id).subscribe((res) => {
        this.car = res;
      });
      this.rideService.getRideById(this.id).subscribe((res) => {
        this.ride = res as Ride;
        this.ride.beginDateTime = new Date(res.beginDateTime);
        this.ride.endDateTime = new Date(res.endDateTime);
        this.ride.reservationDateTime = new Date(res.reservationDateTime);
      });
    });
  }

  deleteRide(): void {
    this.rideService.deleteRideFromCar(this.id, this.car._id!).subscribe((res) => {
      this.router.navigate([`/car/${this.car._id}`]);
    });
  }
}
