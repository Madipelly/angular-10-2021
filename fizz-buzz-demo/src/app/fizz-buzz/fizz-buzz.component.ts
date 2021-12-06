import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {
  results: any = [];
  
  constructor(private fbService:FizzBuzzService) { }

  ngOnInit(){
    this.doProcess();
  }

  doProcess() {
    const number = this.fbService.getRandomNumberForLoop();
    for (let i = 0; i < number; i++) {
      if (this.fbService.isFizzBuzz(i)) {
        this.results.push('Fizz-Buzz');
      } else if (this.fbService.isBuzz(i) && !this.fbService.isFizz(i)) {
        this.results.push('Buzz');
      } else if (this.fbService.isFizz(i) && !this.fbService.isBuzz(i)) {
        this.results.push('Fizz');
      } else {
        this.results.push('shitti..');
      }
    }
  }

}
