import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { RideService } from 'src/app/services/ride.service';
import { Location } from '../../location/location.model';
import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-edit',
  templateUrl: './ride-edit.component.html',
  styleUrls: ['./ride-edit.component.scss']
})
export class RideEditComponent implements OnInit {
  public id: String = '';
  public carId: String = '';
  public beginDateTimeString = '';
  public endDateTimeString = '';
  public ride: Ride = { _id: '', name: '', beginDateTime: new Date(), endDateTime: new Date(), destination: new Location('', '', '', ''), user: null, reservationDateTime: new Date() };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService,
    private rideService: RideService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.carId = params['carId']
      if (this.id != undefined) {
        this.rideService.getRideById(this.id).subscribe((ride) => {
          this.ride = ride;
          this.beginDateTimeString = ride.beginDateTime.toLocaleString().replace('Z', '');
          this.endDateTimeString = ride.endDateTime.toLocaleString().replace('Z', '');
          console.log(ride);
        });
      }
    });
  }

  async submit(): Promise<void> {
    this.ride.beginDateTime = new Date(this.beginDateTimeString);
    this.ride.endDateTime = new Date(this.endDateTimeString);
    if (this.id != undefined) {
      this.rideService.updateRide(this.ride, this.id).subscribe((ride) => {
        this.router.navigate([`/ride/${ride._id}`]);
      })
    } else {
      this.rideService.addRide(this.ride, this.carId).subscribe((ride) => {
        this.router.navigate([`/car/${this.carId}`]);
      });
    }
  }

}
