import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  age;
  showAge;
  convertAge;
  monthAge;
  ageCalculator(){
  if(this.age){
  this.convertAge = new Date(this.age);
  const timeDiff = Math.abs(Date.now() - this.convertAge.getTime());
  this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
   }
  console.log(this.convertAge)
   
  var dobMonth =this.convertAge.getMonth()+1; 

  var now = new Date(); 
   
  var currentMonth = now.getMonth()+1;

  this.monthAge=currentMonth-dobMonth;

  if(this.monthAge<0){
    this.monthAge=this.monthAge+12;
  }
    }

}
