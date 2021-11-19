import { Ride } from "../ride/ride.model";

export class Car {
    constructor(
        public _id: string | null,
        public name: string,
        public plate: string,
        public imageSrc: string,
        public reservations: Ride[]
    ) { }
}