import {Component} from '@angular/core';

@Component({
    selector:'app-myaccount',
    templateUrl:'./account.component.html',
    styleUrls:['./account.component.css']
})
export class AccountComponent{
    parentMessage = "message from parent"
}