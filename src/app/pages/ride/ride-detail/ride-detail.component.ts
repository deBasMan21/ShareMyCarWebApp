import { Component, OnInit } from '@angular/core';
import { Ride } from '../ride.model';
import { Car } from '../../car/car.model';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.scss'],
})
export class RideDetailComponent implements OnInit {
  id: number = 0;
  ride: Ride = {
    id: 1,
    name: 'maccie',
    beginDateTime: new Date(2021, 11, 11, 12),
    endDateTime: new Date(2021, 11, 11, 14),
  };

  car: Car = {
    id: 1,
    name: 'Tesla model 3',
    plate: 'HX-803-F',
    imgSrc:
      'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
    rides: []
  };

  constructor(public route: ActivatedRoute, private carService: CarServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.ride = this.carService.getRideById(this.id);
      this.car = this.carService.getCarForRide(this.id);
    });
  }

  deleteRide(): void {
    console.log('delete ride');
  }
}
