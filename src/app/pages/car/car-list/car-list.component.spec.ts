import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CarListComponent } from './car-list.component';
import { CarServiceService } from 'src/app/services/car-service.service';
import { Car } from '../car.model';

const expectedCars: Car[] = [new Car('1', 'name', 'plate', 'image', [], false)];
const expectedOthercars: Car[] = [
  new Car('2', 'name', 'plate', 'image', [], false),
];

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

  it('should have correct data', (done: DoneFn) => {
    carService.getAllCars.and.returnValue(of(expectedCars));
    carService.getCarAllOtherCars.and.returnValue(of(expectedOthercars));

    component.ngOnInit();

    expect(component.cars.length == 1);
    expect(component.cars[0]._id === '1');

    expect(component.friendsCars.length == 1);
    expect(component.friendsCars[0]._id === '2');

    expect(component.carsDone);
    expect(component.otherCarDone);

    done();
  });
});
