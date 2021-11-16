import { Injectable } from '@angular/core';
import { Car } from '../pages/car/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Car[] = [
    {
      id: 1,
      name: 'Tesla model x',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
    },
    {
      id: 2,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
    },
    {
      id: 3,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
    },
    {
      id: 4,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
    },
  ];

  constructor() {}

  getAllCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | null {
    return this.cars.filter((car) => car.id == id)[0];
  }

  updateCar(car: Car): boolean {
    var oldCar: Car = this.cars.filter(
      (currentCar) => currentCar.id === car.id
    )[0];
    let index: number = this.cars.indexOf(oldCar);
    this.cars[index] = car;
    return true;
  }

  deleteCar(carId: number): boolean {
    var oldCar: Car = this.cars.filter(
      (currentCar) => currentCar.id === carId
    )[0];
    let index: number = this.cars.indexOf(oldCar);
    this.cars.splice(index);
    return true;
  }

  addCar(car: Car): boolean {
    this.cars.push(car);
    return true;
  }
}
