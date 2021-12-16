import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective  implements OnInit{
    constructor(private elementRef: ElementRef) { // use private before the property ( elementRef can be any name) 
                                                  //so the property can be used anywhere in this class
    }

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        
    }
}