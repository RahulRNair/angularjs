import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
//import 'rxjs/Rx';
//import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map'


import {Login,Users} from './login';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


  @Injectable()
  export class ApiService{
    private apiUrl_Login = 'http://localhost:8080/api'
    constructor(
    private http: HttpClient) { }

    getLogin (username,password){
      return this.http.post(this.apiUrl_Login+"/login",{username:username,password:password});
      }
    getUsers(query): Observable<Users[]> {
      return this.http
          .get(this.apiUrl_Login+"/users?query="+query)
          .map((response: Response) => {
              console.log(response['data'])
              return <Users[]>response['data'];
          })
          ;
  }
     
     

        
  }