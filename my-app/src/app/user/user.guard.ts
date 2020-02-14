import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(this.userService.isLoggedIn){
      if(next.url[0].path === 'todo'){
        return true;
      }
      else{
        return next.params.username === this.userService.currentUser;
      }
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
