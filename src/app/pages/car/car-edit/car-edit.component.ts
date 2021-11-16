import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss'],
})
export class CarEditComponent implements OnInit {
  public id: number = 0;
  public car: Car = { name: 'test', id: 0, imgSrc: '', plate: '' };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.car = this.carService.getCarById(this.id)!;
      console.log(this.car);
    });
  }
}
