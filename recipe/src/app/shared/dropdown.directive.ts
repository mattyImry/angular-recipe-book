import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen = false; //binding property by attaching the opne css class to elemeent

    @HostListener('click') toggleOpen() { //listening to click event on element where the directive in put
        this.isOpen = !this.isOpen;
    }
}