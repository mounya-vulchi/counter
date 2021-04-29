import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service'
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  dataArray=[];
  //inject data service object
  constructor(private ds:UserService,private router:Router) { }

  //get data from service observable
  ngOnInit(): void {
    this.ds.getData().subscribe(
      res=>{
        this.dataArray=res;
        console.log(res)
      },
      err=>{
        alert("something went wrong");
        console.log(err)
      }
    );
  }
  gotoDetails(obj){
    //navigate to details component
    console.log(obj)
    console.log(obj.name)
    this.router.navigate(["/details",obj.name])
  }
}
