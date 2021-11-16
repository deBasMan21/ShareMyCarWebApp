import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ride } from '../../ride/ride.model';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  public id: number = 0;

  public car: Car = { name: '', id: 0, imgSrc: '', plate: '', rides: [] };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.car = this.carService.getCarById(this.id)!;
    });
  }
}
