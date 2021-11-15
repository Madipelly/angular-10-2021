import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-control';
  evenNumbers:number[]=[];
  oddNumbers:number[]=[];

  onGame(firedNumber:number){
   if(firedNumber%2 === 0){
     this.evenNumbers.push(firedNumber)
   }else{
     this.oddNumbers.push(firedNumber)
   }
  }
}
