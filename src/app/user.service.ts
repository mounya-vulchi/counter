import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //inject HttpClient object

  constructor(private hc:HttpClient) { }

  //make http request

  getData():Observable<any>{
   return this.hc.get("https://restcountries.eu/rest/v2/all")
  }
  //get one object based on id
  getOneObject(name):Observable<any>{
  return  this.hc.get("https://restcountries.eu/rest/v2/name/"+name)
  }
}
