import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';
import { AuthService } from '../services/authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  currentUser: IUser = {
    isAuth: false,
    User: { Token: '', UserName: '', Id: '', Email: '' }
  };

  constructor(private authService : AuthService){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean > | Promise<boolean> | boolean  {
   
    this.authService.userSubject.subscribe(
      data => {
       this.currentUser = data;
       console.log(this.currentUser);
       console.log(state.url);
       localStorage.setItem('PrevUrl',state.url);
      });
      if(this.currentUser.isAuth){
        return true
      }
      else{
        return false
      }   
  }  
}
