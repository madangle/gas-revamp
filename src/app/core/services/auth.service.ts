import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: string = "abcdefghijklmnopqrstuvwxyz";
  isLoggedIn : boolean = false;

  constructor() { }

  getToken(){
    if(this.authToken){
      this.isLoggedIn = true;
      return this.isLoggedIn;
    }
    else{
      this.isLoggedIn = false;
      return this.isLoggedIn;
    }
  }
  
}