import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cuasomvalidator } from './cuasomvalidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'task';
  formDetails=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    age:new FormControl('',[Validators.required,Cuasomvalidator] ),
    contact:new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{9}$")]),
    email:new FormControl('',[Validators.email,Validators.required])
    // we can u patterns also regular expression
  })
  onSubmit(){
    console.log("form data",this.formDetails.value);
    
  }
}
