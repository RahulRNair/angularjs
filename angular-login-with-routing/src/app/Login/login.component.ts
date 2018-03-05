import { Component, OnInit  } from '@angular/core';
import { ApiService } from '../service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-login',
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{

    UsernameErrmsg = '';
    PasswordErrmsg = '';
    CommonErrmsg = '';
    isProcessing  = false;
    constructor(
        private apiService: ApiService,
        private route: ActivatedRoute,
        private router: Router
    ){};
    ngOnInit(){
       if(localStorage.getItem("authToken")){
        this.router.navigate(['/dashboard']);
       }
    }
    login(uname: String,pwd: String): void{
        uname = uname.trim();
        pwd = pwd.trim();
        if(uname=='')
        {
            this.UsernameErrmsg = "Username is required"
            this.PasswordErrmsg = ""
        }
        else if(uname.length<3)
        {
            this.UsernameErrmsg = "Username is too short"
            this.PasswordErrmsg = ""
        }
        else if(pwd=='')
        {
            this.PasswordErrmsg = "Password is required"
            this.UsernameErrmsg = ""
        }
        else if(uname.length<3)
        {
            this.PasswordErrmsg = "Password is too short"
            this.UsernameErrmsg = ""
        }
        else{
            this.PasswordErrmsg = '';
            this.UsernameErrmsg = '';
            this.isProcessing  = true;
            this.apiService.getLogin(uname,pwd).subscribe(
            data => {
               
                if(data['authToken'] && data['status']==200)
                {
                    localStorage.setItem('authToken',data['authToken']);
                    this.router.navigate(['/dashboard']);
                }
                else{
                   this.isProcessing  = false;
                   this.CommonErrmsg = 'Login Failed ,please check your Username and Password';
                }
               
            },
            error => {
                //alert("Hai")
                this.isProcessing  = false;
                this.CommonErrmsg = 'Login Failed ,please check your Username and Password';
                // this.alertService.error(error);
                // this.loading = false;
            });
        }
    }
    
}
