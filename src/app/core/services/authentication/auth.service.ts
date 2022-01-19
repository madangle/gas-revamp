import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = localStorage.getItem('token');
  userSubject:BehaviorSubject<IUser> = new BehaviorSubject<IUser>({
    isAuth:false,
    User: { Token: '', UserName: '', Id: '', Email: '' }
  });
  //  currentUser: IUser = {
  //   isAuth: false,
  //   User: { Token: '', UserName: '', Id: '', Email: '' }
  // };
  constructor() { 
    this.isLoggedIn();
  }


  // getToken():Promise<any>{
  //   return new Promise<any>((resolve,reject) => {
  //     this.token = "abcdefghijklmnopqrstuvwhhxyz";
  //     if(this.token != null || this.token != ''){
  //       resolve(this.token);
  //     }
  //     else{
  //       reject('');
  //     }
  //   });
  // }

  isLoggedIn(){
    if(this.token == null || this.token == undefined || this.token == ''){
      this.userSubject.next({isAuth:false});
    }
    else{
      this.userSubject.next({isAuth:true,User:{'Token':this.token}});
    }
    console.log("from service"+this.userSubject)
    return this.userSubject;   
  }

  // login(values:object):Observable<any>{

  // }
}