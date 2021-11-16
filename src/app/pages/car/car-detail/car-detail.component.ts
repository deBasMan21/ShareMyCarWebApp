import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ride } from '../../ride/ride.model';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss'],
})
export class CarDetailComponent implements OnInit {
  public id: number | null = null;

  public car: Car = {
    id: 1,
    name: 'Tesla model 3',
    plate: 'HX-803-F',
    imgSrc:
      'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
  };
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

  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }
}
