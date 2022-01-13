import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'], // this is need to get the dynamic route/url for user id and name from line 21 app module
      name: this.route.snapshot.params['name']
    };

    //to access the user when already inside the component otherwise angular won't waste performance to reload if already in the component so not update on data
    this.route.params
      .subscribe(
          (params: Params) => {
            this.user.id = params['id'];
            this.user.name = params['name'];
          }
      );
  }
}
