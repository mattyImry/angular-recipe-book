import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(id: number) {
    // complex calculation any other code
    //a number as  id was added as a parameter in the click event in home.html
    //pass the id: number here as a parameter so can be used in the ['/servers', id, 'edit'] plus queryParams and fragment
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment: 'loading'});
  }

  onLogIn() {
    this.authService.login();
  }

  onLogOut() {
    this.authService.logout();
  }
}
