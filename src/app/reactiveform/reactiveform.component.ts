import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  registerForm:FormGroup

  constructor() { }

  ngOnInit(): void {

    this.registerForm=new FormGroup({

      //username 
      username:new FormControl(null,Validators.required),
      //email
      email:new FormControl(null,Validators.required),
      //name
      name:new FormControl(null),
      //gender
      gender:new FormControl(null)

    });
  }

  onSubmit(){
    console.log(this.registerForm.value)
  }
}
