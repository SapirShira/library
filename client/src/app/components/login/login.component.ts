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

  constructor(private authService:AuthService) { }

  login()
  {
    
  }

  ngOnInit(): void {

  }

}
