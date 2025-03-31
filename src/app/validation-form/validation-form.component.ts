import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-form',
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './validation-form.component.html',
  styleUrl: './validation-form.component.css'
})
export class ValidationFormComponent {
  profileForm = new FormGroup({
    first : new FormControl('',[Validators.required]),
    last : new FormControl('',[Validators.required,Validators.maxLength(15)]),
    emailaddress: new FormControl('',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}')]),
   })
  
   onsubmit(){
    // this.profileForm.value.firstname = this.firstname.value;
    console.log(this.profileForm.value);
   }
   get first(){
    return this.profileForm.get('first'); 
   }
   get last(){
    return this.profileForm.get('last'); 
   }
   get emailaddress(){
    return this.profileForm.get('emailaddress'); 
   }
}
