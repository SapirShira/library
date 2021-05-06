import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin:boolean=false;
  link:string="";
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLogin=this.authService.isLogin();
    this.link="התנתק/התחבר"
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
    // if(this.authService.isLogin()==true)
    // {
      this.authService.logout();
    // }


  }

}
