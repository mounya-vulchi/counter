import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModal=new user();
  Users=[];

  constructor() { }

  ngOnInit(): void {
  }

  
  onSubmit(){
    let newObj=new user();
    //newObj=Object.assign({},this.userModal)
    newObj={...this.userModal}

    this.Users.push(newObj)

    console.log(this.Users)

  }
  delete(i){
    this.Users.splice(i,1)
  }

  // doLogin(ref){
  //   console.log(ref.value)
  // }
}

export class user{
  public name:string;
  public email:string;
  public username:string;
  public password:string
}