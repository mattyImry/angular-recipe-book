import { Directive, HostBinding, HostListener,ElementRef} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; //binding property by attaching the opne css class to elemeent

    //@HostListener('click') toggleOpen() { //listening to click event on element where the directive in put
        //this.isOpen = !this.isOpen;
    

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false; //closing the drop down anywehre placing the listener in the document
      }

    constructor(private elRef: ElementRef) {}
}
