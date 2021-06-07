import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { worker } from 'src/app/classes/workes';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idWorker:string='';
  password:string='';
  s:boolean=false;

  constructor(private authService:AuthService, private router:Router) { }

  login()
  {
   this.authService.login0(this.idWorker, this.password).subscribe((data: worker[]) => {  
   
    if(this.password==data[0].password)
    {
      this.authService.login(data[0]);
      this.router.navigate(['/books'])

    }
  });;
   

  }

  ngOnInit(): void {

  }

}
