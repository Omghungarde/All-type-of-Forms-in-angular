import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, NgIf],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class 
TemplateDrivenComponent {
  username:any;
  addDetails(val:NgForm){
    this.username = val;

  }
}
