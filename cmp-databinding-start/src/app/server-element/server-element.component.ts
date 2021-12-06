import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated   // u can choose to none or shadow dome. Emulated is default 
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string}; // by using `@input` and update @angular/core with `Input` you can use this property enywhere you can add an alias in the () to be able to use a different name outside you r component but keeping property name in your component

  constructor() { }

  ngOnInit(): void {
  }

}
