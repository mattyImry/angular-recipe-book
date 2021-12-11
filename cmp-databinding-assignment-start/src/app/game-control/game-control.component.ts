import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>(); //inside<> is the type of object like string , number etc.() are needed to get an instance of this object
  interval; // created property
  lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(()=> {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000); // use arrow function otherwise you have to bind to this internal function not onStartGame()
  }

  onPauseGame() {
    clearInterval(this.interval);
  }

}


