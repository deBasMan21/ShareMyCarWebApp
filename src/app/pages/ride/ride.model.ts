import { User } from "../user/user.model";
import { Location } from "../location/location.model";

export class Ride {
  constructor(
    public _id: string,
    public name: string,
    public beginDateTime: Date,
    public endDateTime: Date,
    public destination: Location,
    public reservationDateTime: Date,
    public user: User
  ) { }
}
