import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../pages/car/car.model';
import { Ride } from '../pages/ride/ride.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Car[] = [];

  constructor(private http: HttpClient) { }

  getAllCars(): Promise<Car[]> {
    return fetch('https://sharemycar.herokuapp.com/api/car')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res as Car[];
      });
  }

  getCarById(id: String): Promise<Car> {
    return fetch(`https://sharemycar.herokuapp.com/api/car/${id}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        return res as Car;
      })
  }

  updateCar(car: Car): Observable<Car> {
    console.log(car);
    if (car._id !== null) {
      return this.http.put<Car>(`https://sharemycar.herokuapp.com/api/car/${car._id}`, car);
    } else {
      return this.addCar(car);
    }
  }

  deleteCar(carId: String): Observable<Car> {
    console.log("delete car");
    return this.http.delete<Car>(`https://sharemycar.herokuapp.com/api/car/${carId}`);
  }

  addCar(car: Car): Observable<Car> {
    console.log("add car");
    return this.http.post<Car>(`https://sharemycar.herokuapp.com/api/car/`, car)
  }

  getCarForRide(rideId: String): Observable<Car> {
    return this.http.get<Car>(`https://sharemycar.herokuapp.com/api/ride/${rideId}/car`)
  }


}
