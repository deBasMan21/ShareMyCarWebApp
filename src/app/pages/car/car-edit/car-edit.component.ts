import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.scss'],
})
export class CarEditComponent implements OnInit {
  public id: number = 0;
  public car: Car = { name: '', id: 0, imgSrc: '', plate: '', rides: [] };

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id != undefined) {
        this.car = this.carService.getCarById(this.id)!;
      }
    });
  }

  submit(): void {
    this.carService.updateCar(this.car);
    if (this.id != undefined) {
      this.router.navigate([`/car/${this.id}`]);
    } else {
      this.router.navigate([`/car`]);
    }
  }
}
