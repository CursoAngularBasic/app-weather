import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(public authSrv: AuthServiceService, public router: Router) {

  }
  canActivate() {
    const isAuth = this.authSrv.isAuth()
    if (isAuth) {
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }
  
  canLoad() {
    const isAuth = this.authSrv.isAuth()
    if (isAuth) {
      return true
    }

    this.router.navigate(['/login']);
    return false;
  }
}
