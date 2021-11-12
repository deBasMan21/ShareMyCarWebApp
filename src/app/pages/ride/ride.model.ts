import { Time } from "@angular/common";

export class Ride {
    constructor(
        public id: number,
        public name: string,
        public beginDateTime: Date,
        public endDateTime: Date
    ) { }
}