import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarListComponent } from './car-list.component';
import { CarServiceService } from 'src/app/services/car-service.service';

//describe to start tests
describe('CarService', () => {
  //mock variables used in tests
  let component: CarListComponent;
  let carService: jasmine.SpyObj<CarServiceService>;

  beforeEach(() => {
    //create mock from httpclient
    carService = jasmine.createSpyObj('CarServiceService', [
      'getAllCars',
      'getCarAllOtherCars',
    ]);

    //configure object under test
    TestBed.configureTestingModule({
      providers: [{ provide: CarServiceService, useValue: carService }],
    });

    //create object under test
    component = TestBed.createComponent(CarListComponent).componentInstance;

    //di for object under test
    carService = TestBed.inject(
      CarServiceService
    ) as jasmine.SpyObj<CarServiceService>;
  });

  //test if service is created
  it('should be created', () => {
    //expect service to exist
    expect(component).toBeTruthy();
  });
});
