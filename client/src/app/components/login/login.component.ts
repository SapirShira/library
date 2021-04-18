import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idWorker:string='';
  password:string='';
  s:boolean=false;

  constructor(private authService:AuthService) { }

  login()
  {
    this.s=this.authService.login0(this.idWorker, this.password);
    console.log(this.s);
  }

  ngOnInit(): void {

  }

}
