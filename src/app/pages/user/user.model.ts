import { Car } from "../car/car.model";

export class User {
    constructor(
        public _id: String,
        public name: String,
        public email: String,
        public phoneNumber: String,
        public cars: Car[],
    ) { }
}