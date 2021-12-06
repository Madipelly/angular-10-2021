import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  const fbService = new FizzBuzzService();
  const number = fbService.getRandomNumberForLoop();
  
  // step two generate the random number
  it(`should get a random number for loop`, () => {
    expect(fbService.getRandomNumberForLoop()).toBeGreaterThan(1);
  });

  // get current number
  it(`should get a random number for loop`, () => {
    expect(fbService.getCurrentNumber()).toBeGreaterThan(1);
    expect(fbService.getCurrentNumber()).not.toBeNaN();
  });

  // checking if it is divisible by 3.. buzz
  it(`testing if number ${number} is buzz`, () => {
    expect(fbService.isBuzz(number)).toBe(true, `number ${number} is buzz`);
  });

  // checking if it is divisible by 5.. fizz
  it(`testing if number ${number} is fizz`, () => {
    expect(fbService.isFizz(number)).toBe(true, `number ${number} is fizz`);
  });

  // checking if it is fizz and buzz
  it(`testing if number ${number} is fizz-buzz`, () => {
    expect(() => {
      return fbService.isFizz(number) && fbService.isBuzz(number);
    }).toBe(true, `number ${number} is fizz-buzz`);
  });
});
