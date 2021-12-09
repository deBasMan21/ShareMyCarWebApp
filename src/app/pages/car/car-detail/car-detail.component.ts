import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ride } from '../../ride/ride.model';
import { Car } from '../car.model';
import { CarServiceService } from 'src/app/services/car-service.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  public carDone = false;
  public id: string = '';
  public showRides: boolean = false;

  public car: Car = {
    name: '',
    _id: '1',
    imageSrc: '',
    plate: '',
    reservations: [],
    isOwner: null,
  };

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
      this.carService.getCarById(this.id).subscribe((car) => {
        this.car = car as Car;
        var tempCars: Ride[] = [];
        car.reservations.forEach((item) => {
          const ride: Ride = new Ride(
            item._id,
            item.name,
            new Date(item.beginDateTime),
            new Date(item.endDateTime),
            item.destination,
            new Date(item.reservationDateTime),
            item.user
          );
          if (ride.beginDateTime > new Date()) {
            tempCars.push(ride);
          }
        });
        this.car.reservations = tempCars;
        this.showRides = this.car.reservations.length > 0;
        this.carDone = true;
      });
    });
  }

  deleteCar(): void {
    this.carService.deleteCar(this.id).subscribe((car) => {
      if (!car._id) {
        this.errorService.showError = true;
      } else {
        this.car = car;
        this.router.navigate(['car']);
      }
    });
  }
}
