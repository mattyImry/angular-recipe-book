import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // add renderer (is a variable):Renderer2 to use setStyle() need to add again private namevar: ElementRef to refer to the element in html
  
  constructor( private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {


      // set style takes 4 arguments this.property, name of style, style , important if needed
                                                                                    
      this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }
      
}                                                                                 
