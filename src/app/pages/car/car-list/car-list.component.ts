import { Component, OnInit } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [
    { id: 1, name: 'Tesla model 3', plate: 'HX-803-F', imgSrc: 'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png' },
    { id: 2, name: 'Tesla model 3', plate: 'HX-803-F', imgSrc: 'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png' },
    { id: 3, name: 'Tesla model 3', plate: 'HX-803-F', imgSrc: 'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png' },
    { id: 4, name: 'Tesla model 3', plate: 'HX-803-F', imgSrc: 'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
