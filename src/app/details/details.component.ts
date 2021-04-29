import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dataObj:any;
  constructor(private ar:ActivatedRoute,private  ds:UserService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(params=>{
      let name=params["name"]
      console.log(name)
      this.ds.getOneObject(name).subscribe(
        res=>{
          console.log(res)
          this.dataObj=res;

          console.log(this.dataObj)
        },
        err=>{
          alert("error in reading object")
          console.log(err)
        })
    })
  }

}
