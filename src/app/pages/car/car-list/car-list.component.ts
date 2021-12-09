import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  otherCarDone: boolean = false;
  carsDone: boolean = false;
  cars: Car[] = [];
  friendsCars: Car[] = [];
  error: boolean = false;

  constructor(private carService: CarServiceService, private errorService: ErrorService) { }

  ngOnInit(): void {
    this.errorService.setDefault();
    this.carService.getAllCars().subscribe((cars) => {
      if (cars.length === undefined) {
        this.errorService.showError = true;
      } else {
        this.cars = cars;
        this.carsDone = true;
      }
    });
    this.carService.getCarAllOtherCars().subscribe((cars) => {
      if (cars.length === undefined) {
        this.errorService.showError = true;
      } else {
        this.friendsCars = cars;
        this.otherCarDone = true;
      }
    });
  }
}
