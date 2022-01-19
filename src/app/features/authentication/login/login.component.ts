import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  loginForm:FormGroup = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password:['', Validators.required]
  });

  email(){
    return this.loginForm.get('email');
  }
  
  password(){
    return this.loginForm.get('password');
  }

  constructor(
    private authService:AuthService, 
    private fb:FormBuilder, 
    private router: Router
  ) { }

  ngOnInit(): void {}

  onSubmitLogin(){
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;
    if(email === "user@gmail.com" && password === "user"){
      let token = "dchf";
      this.authService.userSubject.next({isAuth:true,User:{'Token':token}});
      localStorage.setItem('islogin','true');
      localStorage.setItem('token',JSON.stringify(token));
      this.router.navigate(['/']);
    }
    else{
      let token = "";
      this.authService.userSubject.next({isAuth:false,User:{'Token':token}});
      localStorage.setItem('islogin','false');
      localStorage.removeItem('token');
    }
      
  }

}
