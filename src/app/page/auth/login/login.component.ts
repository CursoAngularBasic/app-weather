import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:boolean =false;
  form: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })
  constructor(public userSrv: AuthServiceService, public router: Router) { }

  ngOnInit(): void {
  }

  submit(){
   if (this.form.valid) {
     setTimeout(() => {
      this.loading= true;

      const isLogin =  this.userSrv.login(this.form.value)
  
      if (isLogin) {
        this.router.navigate(['/dashboard']);
      }
     }, 5000);
     
   }
  }
}
