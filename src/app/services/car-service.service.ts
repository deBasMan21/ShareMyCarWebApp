import { Injectable } from '@angular/core';
import { Car } from '../pages/car/car.model';
import { Ride } from '../pages/ride/ride.model';

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
      rides: [
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
        }
      ]
    },
    {
      id: 2,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
      rides: [
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
        }
      ]
    },
    {
      id: 3,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
      rides: [
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
        }
      ]
    },
    {
      id: 4,
      name: 'Tesla model 3',
      plate: 'HX-803-F',
      imgSrc:
        'https://www.pngall.com/wp-content/uploads/7/White-Tesla-Electric-Car-PNG-Picture.png',
      rides: [
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
        }
      ]
    },
  ];

  constructor() { }

  getAllCars(): Car[] {
    return this.cars;
  }

  getCarById(id: number): Car | null {
    return this.cars.filter((car) => car.id == id)[0];
  }

  updateCar(car: Car): boolean {
    if (car.id != 0) {
      var oldCar: Car = this.cars.filter(
        (currentCar) => currentCar.id === car.id
      )[0];
      let index: number = this.cars.indexOf(oldCar);
      this.cars[index] = car;
      return true;
    } else {
      return this.addCar(car);
    }
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
    car.id = this.cars[this.cars.length - 1].id + 1;
    this.cars.push(car);
    return true;
  }

  getRideById(id: number): Ride {
    var currentRide: Ride | null = null;
    this.cars.forEach(car => {
      car.rides.forEach(ride => {
        if (ride.id == id) {
          currentRide = ride;
        }
      });
    });

    return currentRide!;
  }

  getCarForRide(id: number): Car {
    var currentCar: Car | null = null;
    this.cars.forEach(car => {
      car.rides.forEach(ride => {
        if (ride.id == id) {
          currentCar = car;
        }
      });
    });

    return currentCar!;
  }

  deleteRideFromCar(id: number): boolean {
    var rideIndex: number = 0;
    var carIndex: number = 0;
    this.cars.forEach(car => {
      car.rides.forEach(ride => {
        if (ride.id == id) {
          rideIndex = car.rides.indexOf(ride);
          carIndex = this.cars.indexOf(car);
        }
      });
    });
    this.cars[carIndex].rides.splice(rideIndex);
    return true;
  }
}
