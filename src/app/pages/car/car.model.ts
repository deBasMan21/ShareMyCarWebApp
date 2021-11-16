import { Ride } from "../ride/ride.model";

export class Car {
    constructor(
        public id: number,
        public name: string,
        public plate: string,
        public imgSrc: string,
        public rides: Ride[]
    ) { }
}