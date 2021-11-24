import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];
  friendsCars: Car[] = [];

  constructor(private carService: CarServiceService, private authserv: AuthenticationService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((cars) => this.cars = cars);
    this.carService.getCarAllOtherCars().subscribe((cars) => {
      this.friendsCars = cars;
    });
    console.log(this.authserv.isLoggedIn())
  }
}
