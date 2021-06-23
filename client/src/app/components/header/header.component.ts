import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servises/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogin: boolean = false;
  link: string = "";
  isMeneger: boolean = false
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.isLogin = this.authService.isLogin();
    
    this.link = "התנתק/התחבר"
  }

  wor()
  {
    if (this.isLogin) {
      if (this.authService.worker.typeWork == "מנהל/ת") {
        console.log("meneger")
        this.isMeneger=true
        this.router.navigate(['/workes'])

        console.log("is meneger: "+this.isMeneger)
      }
      else
      alert("מצטערים אך אין לך הרשאות לצפות בדף זה")
      console.log("is meneger: "+this.isMeneger)
    }
  }
  // is()
  // {
  //   if(this.authService.isLogin()==true)
  //   {
  //     this.logout()
  //   }

  // }
  logout() {
    // if(this.authService.isLogin()==true)
    // {
    this.authService.logout();
    // }


  }

}
