import { 
  Component, 
  OnInit, 
  Input, 
  ViewEncapsulation, 
  OnChanges, 
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated   // u can choose to none or shadow dome. Emulated is default 
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,

OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string}; // by using `@input` and update @angular/core with `Input` you can use this property enywhere you can add an alias in the () to be able to use a different name outside you r component but keeping property name in your component
  @Input() name: string;
  @ViewChild('heading', {static:true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;

  constructor() { 
    console.log('constructor called!');

  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('text content' + this.heading.nativeElement.textContent);
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck() {
  console.log('ngDocheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentinit called!');
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
    console.log('text content' + this.heading.nativeElement.textContent)
   
  }

  ngOnDestroy() {
    console.log('OnDestroy called!');
  }
}
