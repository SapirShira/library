import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servises/auth.service';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { worker } from 'src/app/classes/workes';
import { MatDialog } from '@angular/material/dialog';
import { try1 } from '../add-worker/add-worker.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  idWorker:string='';
  password:string='';
  s:boolean=false;

  constructor(private authService:AuthService, private router:Router, private matDialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.matDialog.open(try1);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // this.router.navigate(['/workes']);

    });
  }



  login()
  {
   this.authService.login0(this.idWorker, this.password).subscribe((data: worker[]) => {  
   if(data[0])
   {
     console.log("data: "+data[0])
    if(this.password==data[0].password)
    {
      this.authService.login(data[0]);
      this.router.navigate(['/books'])
    }
    else{
alert("סיסמא שגויה")
    }
  }
  else
  alert("עובד אינו נמצא במאגר או שמ.ז. שגוי")
  });;
   

  }

  ngOnInit(): void {

  }

}
