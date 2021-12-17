import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective { // creating the condition as an input

  @Input() set appUnless(condition: boolean) { //this even if it is a method still a property that set when the condition changes we pass a property as we know its a boolean
                                            // this property also has to have the same name as the selector appUnless
    if (!condition) {
      // when condition changes use the createEmbeddedView() to add our template
      this.vcRef.createEmbeddedView(this.temlateRef);

    } else {

      this.vcRef.clear();
    }

  }

  //because we are creating a structural directive ourself above we set that the condistion if false ng will attach a template to the dom 
  //so in the constructor we set that we want to inject the template TemplateRef<any> and the place in the document when we want to place the template ViewContainerRef
  constructor(private temlateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
