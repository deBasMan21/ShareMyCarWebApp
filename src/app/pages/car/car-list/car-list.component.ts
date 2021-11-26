import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';

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

  constructor(private carService: CarServiceService) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((cars) => {
      this.cars = cars;
      this.carsDone = true;
    });
    this.carService.getCarAllOtherCars().subscribe((cars) => {
      this.friendsCars = cars;
      this.otherCarDone = true;
    });
  }
}
