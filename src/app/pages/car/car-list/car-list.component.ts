import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarServiceService) {}

  ngOnInit(): void {
    this.cars = this.carService.getAllCars();
  }
}
