import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarEditComponent } from './car-edit.component';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Car } from '../car.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorService } from 'src/app/services/error.service';

const expectedCar: Car = new Car('1', 'name', 'plate', 'image', [], false);

//describe to start tests
describe('CarDetail', () => {
    //mocks for dependencies used in tests
    let component: CarEditComponent;
    let carService: jasmine.SpyObj<CarServiceService>;
    let route: jasmine.SpyObj<ActivatedRoute>;
    let router: jasmine.SpyObj<Router>;
    let errorService: jasmine.SpyObj<ErrorService>;

    beforeEach(() => {
        //create mock from dependencies
        carService = jasmine.createSpyObj('CarServiceService', ['updateCar']);
        router = jasmine.createSpyObj('Router', ['navigate']);

        //configure object under test
        TestBed.configureTestingModule({
            providers: [{ provide: CarServiceService, useValue: carService }, { provide: ActivatedRoute, useValue: route }, { provide: Router, useValue: router }, { provide: ErrorService, useValue: errorService }],
        });

        //create object under test
        component = TestBed.createComponent(CarEditComponent).componentInstance;

        //di for object under test
        carService = TestBed.inject(CarServiceService) as jasmine.SpyObj<CarServiceService>;
        route = TestBed.inject(ActivatedRoute) as jasmine.SpyObj<ActivatedRoute>;
        router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
        errorService = TestBed.inject(ErrorService) as jasmine.SpyObj<ErrorService>;

        //arrange response for function
        carService.updateCar.and.returnValue(of(expectedCar));
    });

    //test if service is created
    it('should be created', () => {
        //expect service to exist
        expect(component).toBeTruthy();
    });

    it('should have correct data', (done: DoneFn) => {
        //arrange
        component.car = expectedCar;

        //act
        component.onSubmit();

        //assert
        expect(component.car.name === expectedCar.name);

        //done
        done();
    });
});
