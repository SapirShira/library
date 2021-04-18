import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean=false;
  link:string="התחבר";
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLogin=this.authService.isLogin();
    this.link="התחבר"
  }

  // is()
  // {
  //   if(this.authService.isLogin()==true)
  //   {
  //     this.logout()
  //   }
    
  // }
  logout()
  {
    if(this.authService.isLogin()==true)
    {
      this.link="התנתק"
    }
    else
    {
      this.link="התחבר"
    }

    this.authService.logout();
  }

}
