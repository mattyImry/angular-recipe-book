import { Component, OnInit, OnDestroy} from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription; // 2 add a Subscription

  constructor() { }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe(count => { // 1 observable keeps emitting value. To stop it you have to unsubscribe
    //   console.log(count)
    // });
    const customIntervalObserver = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObserver.subscribe(data => {
      console.log(data);
      
    })
  }

  ngOnDestroy(): void { //3 onDestroy to unsubscribe to the sunscription every time i leave that component i unsubscribe to save resources
      this.firstObsSubscription.unsubscribe();
  }

}
