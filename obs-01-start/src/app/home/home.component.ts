import { Component, OnInit, OnDestroy} from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';

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
        if (count === 5) {
          observer.complete(); // completing the onbservable nothing else will be executed
        }
        if (count > 3) {
          observer.error(new Error('Count is major then 3'))
        }
        count++;
      }, 1000);
    });

    
    // using pipe with map operator

    this.firstObsSubscription = customIntervalObserver.pipe(filter(data => {
      return data > 0;
    }),
    map((data: number) => {
      return 'Round: ' + (data + 1);
    }), ).subscribe(data => { // 1st argument of subscribe function dealing with data etc
      console.log(data);
    }, error => { // 2nd argument function handling error with observable
      console.log(error);
      alert(error.message);// display alert to user
    }, () => { //3rd argument empty function to react to the completion
      console.log('Completed')
    });
  }

  ngOnDestroy(): void { //3 onDestroy to unsubscribe to the sunscription every time i leave that component i unsubscribe to save resources
      this.firstObsSubscription.unsubscribe();
  }

}
