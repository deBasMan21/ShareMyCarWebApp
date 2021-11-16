import { Injectable } from '@angular/core';
import { Ride } from '../pages/ride/ride.model';

@Injectable({
  providedIn: 'root'
})
export class RideService {
  public rides: Ride[] = [];

  constructor() { }
}
