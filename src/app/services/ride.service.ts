import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../pages/car/car.model';
import { Ride } from '../pages/ride/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  public rides: Ride[] = [];

  constructor(private http: HttpClient) { }

  getRideById(id: String): Observable<Ride> {
    return this.http.get<Ride>(`https://sharemycar.herokuapp.com/api/ride/${id}`);
  }

  deleteRideFromCar(rideId: String, carId: String): Observable<Ride> {
    return this.http.delete<Ride>(`https://sharemycar.herokuapp.com/api/car/${carId}/ride/${rideId}`);
  }
}
