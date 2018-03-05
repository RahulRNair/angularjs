import {Component, Input} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
   
})
export class HeaderComponent{
    @Input() childMessage: string;
    constructor(
        
        private router: Router
    ){}
    logout(){
        
        localStorage.removeItem('authToken');
        this.router.navigate(['/login'])

    }
}