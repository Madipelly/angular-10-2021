import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {
  number: number = 0;

  constructor() { }
  getRandomNumberForLoop() {
    this.number = parseInt(((Math.random() * 50) / 2).toFixed(0));
    return this.number;
  }

  getCurrentNumber() {
    return this.number;
  }

  isFizz(number: number): boolean {
    return number % 5 === 0;
  }

  isBuzz(number: number): boolean {
    return number % 3 === 0;
  }

  isFizzBuzz(number: number): boolean {
    return number % 3 === 0 && number % 5 === 0;
  }
}
