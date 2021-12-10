import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { RideService } from 'src/app/services/ride.service';
import { Ride } from '../ride.model';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.scss'],
})
export class RideListComponent implements OnInit {
  public ridesDone: boolean = false;
  rides: Ride[] = [];

  constructor(private rideService: RideService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.setDefault();

    this.rideService.getRidesForUser().subscribe((rides) => {
      if (rides.length) {
        let tempRides: Ride[] = [];
        rides.forEach((item) => {
          const ride: Ride = new Ride(
            item._id,
            item.name,
            new Date(item.beginDateTime),
            new Date(item.endDateTime),
            item.destination,
            new Date(item.reservationDateTime),
            item.user
          );
          tempRides.push(ride);
        });
        this.rides = tempRides;
      } else {
        this.errorService.errorMessage = 'Je hebt nog geen ritten aangemaakt'
        this.errorService.showError = true;
      }
      this.ridesDone = true;
    });
  }
}
