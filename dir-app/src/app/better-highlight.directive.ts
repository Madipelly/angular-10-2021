import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defalutColor: string = 'yellow';
  @Input() highlightColor: string = 'green';

  @HostBinding('style.backgroundColor') backgroundColor: string =  this.defalutColor;

  constructor(private eleRef:ElementRef ,private render:Renderer2) { }
  ngOnInit(){
    // this.backgroundColor = this.defalutColor;
   // this.render.setStyle(this.eleRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','blue')
    this.backgroundColor = 'red';
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.render.setStyle(this.eleRef.nativeElement,'background-color','yellow')
    this.backgroundColor = this.highlightColor;
  }

}
