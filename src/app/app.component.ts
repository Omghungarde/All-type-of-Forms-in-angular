import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ValidationFormComponent } from "./validation-form/validation-form.component";
import { TemplateDrivenComponent } from "./template-driven/template-driven.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, ValidationFormComponent, TemplateDrivenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 name = new FormControl();
 password = new FormControl();

 displayValue(){
  console.log(this.name.value, this.password.value);
  
 }

 setValue(){
  this.name.setValue('Harsh');
  this.password.setValue('Har@12334')
 }

 profileForm = new FormGroup({
  firstname : new FormControl(),
  lastname : new FormControl(),
  email: new FormControl(),
 })

 onsubmit(){
  // this.profileForm.value.firstname = this.firstname.value;
  console.log(this.profileForm.value);
 }
}
