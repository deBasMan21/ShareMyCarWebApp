import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from '../../ride/ride.model';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  public id: string = '';

  public car: Car = { name: '', _id: '1', imageSrc: '', plate: '', rides: [] };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.carService.getCarById(this.id).then((car) => {
        this.car = car;
      });
    });
  }

  deleteCar(): void {
    this.carService.deleteCar(this.id).subscribe((car) => {
      this.router.navigate(['car']);
    });
  }
}
