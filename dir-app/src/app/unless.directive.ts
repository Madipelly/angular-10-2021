import { Directive, 
  Input, 
  TemplateRef, 
  ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
// bulil custom *ngIf dirctive

  @Input() set appUnless(condition: boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.tempRef);
    }else{
     this.vcRef.clear();
    }

  }

  constructor(private tempRef:TemplateRef<any>,private vcRef:ViewContainerRef) { }

}
