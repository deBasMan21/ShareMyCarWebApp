import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RideService } from 'src/app/services/ride.service';
import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss']
})
export class RideListComponent implements OnInit {

  rides: Ride[] = [];

  constructor(private rideService: RideService) { }

  ngOnInit(): void {
    this.rideService.getRidesForUser().subscribe((rides) => {
      let tempRides: Ride[] = [];
      rides.forEach((item) => {
        const ride: Ride = new Ride(item._id, item.name, new Date(item.beginDateTime), new Date(item.endDateTime), item.destination, new Date(item.reservationDateTime), item.user);
        console.log(item.user);
        tempRides.push(ride);
      });
      this.rides = tempRides;
    });
  }

}
