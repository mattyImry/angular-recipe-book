import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  
  suggestUserName() {
    const suggestedName = 'Superuser';
    //CREATE THE SAME OBJECT AS IN THE FORM WITH THE USE OF setValue() METHOD, NOT A VERY GOOD METHODS DUE TO THE FACT THAT THE FORM GETS CLEARED of all input
    // this.signupForm.setValue({ 
    //   userData : {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'Pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    //PATCH VALUE METHOD TO PATCH ONLY THE VALUE WE NEED TO DINAMICALLY CHANGE
    //THIS METHOD IS ONLY AVAILABLE INSIDE THE FORM GROUP: OUR FORM + FORM this.signupForm.form.patchValue()
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) { //get asses to the form using (ngSubmit)="onSubmit(f)" #f="ngForm" in the form tag
  //   console.log(form);
    
  // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

  }
}
