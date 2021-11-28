import { HttpClient } from '@angular/common/http';
import { Injectable, SkipSelf } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../pages/car/car.model';
import { Ride } from '../pages/ride/ride.model';

@Injectable({
  providedIn: 'root',
})
export class CarServiceService {
  cars: Car[] = [];
  baseurl: string = 'https://sharemycar.herokuapp.com/api';
  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseurl}/car`);
  }

  getCarById(id: String): Observable<Car> {
    return this.http.get<Car>(`${this.baseurl}/car/${id}`);
  }

  updateCar(car: Car): Observable<Car> {
    if (car._id !== null) {
      return this.http.put<Car>(`${this.baseurl}/car/${car._id}`, car);
    } else {
      return this.addCar(car);
    }
  }

  deleteCar(carId: String): Observable<Car> {
    return this.http.delete<Car>(`${this.baseurl}/car/${carId}`);
  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseurl}/car/`, car);
  }

  getCarForRide(rideId: String): Observable<Car> {
    return this.http.get<Car>(`${this.baseurl}/ride/${rideId}/car`);
  }

  getCarAllOtherCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseurl}/car/all/get`);
  }
}
