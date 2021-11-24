import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Car } from '../pages/car/car.model';
import { CarServiceService } from './car-service.service';

// Mock object to use in tests
const expectedCars: Car[] = [new Car('id', 'name', 'plate', 'image', [], false)];
const singleCar: Car = new Car('id', 'name', 'plate', 'image', [], false);
const updatedCar: Car = new Car('id', 'updatedName', 'plate', 'image', [], false);
const newCar: Car = new Car(null, 'updatedName', 'plate', 'image', [], false);

//describe to start tests
describe('CarService', () => {
    //mock variables used in tests
    let service: CarServiceService;
    let httpSpy: jasmine.SpyObj<HttpClient>;

    beforeEach(() => {
        //create mock from httpclient
        httpSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);

        //configure object under test
        TestBed.configureTestingModule({
            providers: [{ provide: HttpClient, useValue: httpSpy }],
        });

        //create object under test
        service = TestBed.inject(CarServiceService);

        //di for object under test
        httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    });


    //test if service is created
    it('should be created', () => {
        //expect service to exist
        expect(service).toBeTruthy();
    });

    //test for getallcars
    it('should return a list of cars', (done: DoneFn) => {
        //set up mock to give propper return value
        httpSpy.get.and.returnValue(of(expectedCars));

        //test the function
        service.getAllCars().subscribe((cars: Car[]) => {
            //assert the results from the function
            expect(cars.length).toBe(1);
            expect(cars[0]._id).toEqual(expectedCars[0]._id);
            done();
        });
    });

    it('should return a single car', (done: DoneFn) => {
        //set up mock to give propper return value
        httpSpy.get.and.returnValue(of(expectedCars[0]));

        //test the function
        service.getCarById(singleCar._id!).subscribe((car: Car) => {
            //assert the results from the function
            expect(car._id).toEqual(singleCar._id);
            expect(car.name).toBe('name');
            done();
        });
    });


    it('should update a car', (done: DoneFn) => {
        //set up mock to give propper return value
        httpSpy.put.and.returnValue(of(updatedCar));

        //test the function
        service.updateCar(singleCar).subscribe((car: Car) => {
            //assert the results from the function
            expect(car._id).toEqual(singleCar._id);
            expect(car.name).toBe('updatedName');
            done();
        });
    });


    it('should create a car', (done: DoneFn) => {
        //set up mock to give propper return value
        httpSpy.post.and.returnValue(of(singleCar));

        //test the function
        service.updateCar(newCar).subscribe((car: Car) => {
            //assert the results from the function
            expect(car._id).toEqual(singleCar._id);
            expect(car.name).toBe('name');
            done();
        });
    });


    it('should delete a car', (done: DoneFn) => {
        //set up mock to give propper return value
        httpSpy.delete.and.returnValue(of(singleCar));

        //test the function
        service.deleteCar(singleCar._id!).subscribe((car: Car) => {
            //assert the results from the function
            expect(car._id).toEqual(singleCar._id);
            expect(car.name).toBe('name');
            done();
        });
    });
});
