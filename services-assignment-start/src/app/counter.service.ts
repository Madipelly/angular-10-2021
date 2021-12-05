import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  incrementsetToInactive = 0;
  incrementsetToActive = 0;

  constructor() { }

  counterInactive() {
    this.incrementsetToInactive++;
    console.log('Inactive Count', this.incrementsetToInactive);

  }
  counterActive() {
    this.incrementsetToActive++;
    console.log('Active Count', this.incrementsetToActive);

  }
}
