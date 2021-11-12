import { Injectable } from '@angular/core';
import { UserModel } from 'src/app/models/user-model.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  login(user: UserModel){
    if (user.username.toLowerCase() === 'curso@curso.com' && user.password === '1234') {
      localStorage.setItem('auth','true');
      return true;
    } else {
      return false;
    }
  }

  isAuth(){
    var isauth = Boolean(localStorage.getItem('auth'))
    return isauth;
  }
}
