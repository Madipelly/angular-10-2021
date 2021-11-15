import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent
 implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element:{type:string,name:string,content:string};

  //angular lifecycle hooks
  constructor() {
    console.log("constructor called!");  
   }
  
   
  ngOnInit(): void {
    console.log("ngOnInit called!"); 
  }

  ngOnChanges(change:SimpleChanges){
    console.log("ngOnChanges called!!");
    console.log("Observe", change); 
  }
  ngDoCheck(){
    console.log("ngDoCheck called!!"); 
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!!"); 
  }
  ngAfterContentChecked(){
   console.log("ngAfterContentChecked called");

  }
  ngAfterViewChecked(){
  console.log("ngAfterViewChecked");
  
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy called!!!");
    
  }

}
