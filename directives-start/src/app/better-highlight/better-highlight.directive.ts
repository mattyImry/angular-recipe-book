import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2 
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // hostbinding lets you style directly with a property we also give a value of transparent to the property backgroundColor: string to avoid errors
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  // add renderer (is a variable):Renderer2 to use setStyle() need to add again private namevar: ElementRef to refer to the element in html
  constructor( private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
      // set style takes 4 arguments this.property, name of style, style , important if needed                                                                              
      //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
  }
  

  // add @HostListener which takes an argument as one of the vents supported in the dom
  //you can also pass in the method the type of data in this case event or you can also listen to custom events 
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  } 

  @HostListener('mouseleave') mouseLeave() {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }
}                                                                                 
