import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm; //getting asses to the form using view @child
  defaultQuestion = 'pet';
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) { //get asses to the form using (ngSubmit)="onSubmit(f)" #f="ngForm" in the form tag
  //   console.log(form);
    
  // }

  onSubmit() {
    console.log(this.signupForm);
    
  }
}
