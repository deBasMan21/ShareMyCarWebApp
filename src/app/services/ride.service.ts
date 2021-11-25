import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../pages/car/car.model';
import { Ride } from '../pages/ride/ride.model';

@Injectable({
  providedIn: 'root',
})
export class RideService {
  public rides: Ride[] = [];
  baseurl: string = 'http://85.215.212.200/api';

  constructor(private http: HttpClient) {}

  getRideById(id: String): Observable<Ride> {
    return this.http.get<Ride>(`${this.baseurl}/ride/${id}`);
  }

  deleteRideFromCar(rideId: String, carId: String): Observable<Ride> {
    return this.http.delete<Ride>(
      `${this.baseurl}/car/${carId}/ride/${rideId}`
    );
  }

  addRide(ride: Ride, carId: String): Observable<Ride> {
    return this.http.post<Ride>(`${this.baseurl}/car/${carId}/ride`, ride);
  }

  updateRide(ride: Ride, rideId: String): Observable<Ride> {
    return this.http.put<Ride>(`${this.baseurl}/ride/${rideId}`, ride);
  }

  getRidesForUser(): Observable<Ride[]> {
    return this.http.get<Ride[]>(`${this.baseurl}/ride`);
  }
}
