import {Component} from '@angular/core';
import { ApiService } from '../service';
import {Login,Users} from '../login';

@Component({
    selector:'app-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent{
    _postsArray: Users[];
    constructor(
        private apiService:ApiService
    ){}

    search(query: String){
       

        this.apiService.getUsers(query).subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )

    }

}