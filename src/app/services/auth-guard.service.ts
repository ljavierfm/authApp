import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot,RouterStateSnapshot,CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';


@Injectable()
export class AuthGuardService implements CanActivate{

  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isAuthenticated()){
      console.log('paso el guard');
      return true;
    }
    else{
      console.log('bloqueado por el guard');
      return false;
    }
  }
  constructor(private auth:AuthService) { }

}
