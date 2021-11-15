import { 
  Component, 
  ElementRef, 
  EventEmitter, 
  OnInit,
  Output, 
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() onServerCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() onBlueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

  // newServerName = '';
  // newContentName = '';
   @ViewChild('newContentNameInput') cname:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onServerCreate(snameInput:HTMLInputElement){
    // console.log("Capture Local Ref Values:",snameInput);
    // console.log("Capture Local Ref Values:",snameInput.value);
    
    this.onServerCreated.emit({
      serverName:snameInput.value,
      serverContent:this.cname.nativeElement.value
    })
    }
  
    onBlueprintCreate(snameInput:HTMLInputElement){
     this.onBlueprintCreated.emit({
      serverName:snameInput.value,
      serverContent:this.cname.nativeElement.value
     })
    }

}
