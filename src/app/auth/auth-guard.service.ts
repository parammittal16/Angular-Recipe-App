import { CanActivate } from "@angular/router/src/interfaces";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router/src/router_state";
import { Injectable } from "@angular/core";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService){}
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    return this.authService.isAuthenticated();
  }
}
