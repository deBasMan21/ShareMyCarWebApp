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

  public car: Car = { name: '', id: 0, imgSrc: '', plate: '' };
  public rides: Ride[] = [
    {
      id: 1,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 2,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 3,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 4,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 5,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 6,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 7,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 8,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 9,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
    {
      id: 10,
      name: 'maccie',
      beginDateTime: new Date(2021, 11, 12, 12),
      endDateTime: new Date(2021, 11, 12, 14),
    },
  ];

  constructor(
    public route: ActivatedRoute,
    private carService: CarServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.car = this.carService.getCarById(this.id)!;
    });
  }
}
