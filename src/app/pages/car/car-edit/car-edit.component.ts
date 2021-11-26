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
  public id: string = '';
  public car: Car = {
    name: '',
    _id: null,
    imageSrc: '',
    plate: '',
    reservations: [],
    isOwner: null,
  };
  public showEdit: boolean = false;

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id != undefined) {
        this.carService.getCarById(this.id).subscribe((car) => {
          this.car = car;
          if (this.car.isOwner) {
            console.log('is owner');
            this.showEdit = true;
          }
        });
      } else {
        console.log('id is undefined');
        this.showEdit = true;
      }
    });
  }

  async submit(): Promise<void> {
    await this.carService.updateCar(this.car).subscribe((car) => {
      console.log(car);
      if (this.id != undefined) {
        this.router.navigate([`/car/${this.id}`]);
      } else {
        this.router.navigate([`/car`]);
      }
    });
  }
}
