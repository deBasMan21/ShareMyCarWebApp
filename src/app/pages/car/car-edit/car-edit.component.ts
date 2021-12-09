import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ErrorService } from 'src/app/services/error.service';

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
    private router: Router,
    private errorService: ErrorService
  ) { }

  ngOnInit(): void {
    this.errorService.setDefault();
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id != undefined) {
        this.carService.getCarById(this.id).subscribe((car) => {
          this.car = car;
          if (this.car.isOwner) {
            this.showEdit = true;
          } else {
            this.errorService.showError = true;
          }
        });
      } else {
        this.showEdit = true;
      }
    });
  }

  async onSubmit(): Promise<void> {
    await this.carService.updateCar(this.car).subscribe((car) => {
      if (!car._id) {
        this.errorService.showError = true;
      } else {
        if (this.id != undefined) {
          this.router.navigate([`/car/${this.id}`]);
        } else {
          this.router.navigate([`/car`]);
        }
      }
    });
  }
}
