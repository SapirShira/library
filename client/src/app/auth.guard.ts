import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable}from '@angular/core';
import { AuthService } from './servises/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router, private authService:AuthService){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{


        if(this.authService.isLogin())
        {
            return true;
        }

        this.router.navigate(['/login'])
        return false;
    }
}