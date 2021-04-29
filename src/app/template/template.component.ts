import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  userData=new user();
  Users=[];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let newObj=new user();
    newObj={...this.userData}
    this.Users.push(newObj)
    console.log(this.Users)
  }
}

export class user{
  public name:string;
  public password:string;
  public gender:string;
  public designation:string;
  public about:string
}
