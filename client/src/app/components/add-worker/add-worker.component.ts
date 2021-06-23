import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/servises/workers.service';
import { worker } from 'src/app/classes/workes';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/servises/auth.service';


@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {
  this: any;

  constructor(private workerService: WorkersService, private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router, private matDialog: MatDialog) { }

  newWorker: worker = new worker();
  id: number = null;
  types: string[] = ['ספרנית', 'מנהל/ת']
  answer: boolean;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {


    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id == -1) {
      this.newWorker = new worker();
    }
    else {
      this.workerService.GetWorkerById(this.id).subscribe((data: worker[]) => { this.newWorker = data[0] });
    }
  }

  openDialog() {

    const dialogRef = this.matDialog.open(try1);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigate(['/workes']);

    });

  }

  idcheck: boolean = false
  savaWorker() {
    if (this.id == -1) {
      console.log(this.IdCorrect(this.newWorker.idWorker.toString()))
      if (this.IdCorrect(this.newWorker.idWorker.toString()) == true) {
        this.newWorker.status = true;
        this.workerService.createWorkers(this.newWorker).subscribe(res => {
          this.answer = res
          console.log(this.answer);
          if (this.answer == true) {


            this.openDialog()

          }
        })
      }
      else {

        alert("תז אינה תקינה ")
      }

    }

    else {
      this.workerService.updateWorker(this.newWorker).subscribe(res => {
        this.answer = res;
        if (this.answer == true) {
          this.openDialog()

        }
      })

    }
  }


  changeInput(input: any, icon: any): any {
    input.type = input.type === 'password' ? 'text' : 'password';
    icon.icon = icon.icon === "eye" ? "eye-slash" : "eye";
  }

  i: number
  sum: number
  temp: number


  IdCorrect = (id: string): boolean => {


    if (id.length < 9) {
      for (this.i = 0; this.i < 9 - id.length; this.i++) {
        id = "0" + id;
      }
    }

    this.sum = 0;//לסיכום החישוב

    for (this.i = 0; this.i < 9; this.i++) {
      //אם האינדקס זוגי מכפיל באחד ומכניס לסיכום
      if (this.i % 2 == 0) {
        console.log("add " + id.charAt(this.i))
        this.sum += +(id.charAt(this.i));
        console.log("sum  = " + this.sum)
      }
      //אם האינדקס זוגי מכפיל ב-2
      //ובודק אם התוצאה דו סםרתית מחבר את האחדות והעשרות
      //התוצאה מוכנסת לסיכום
      else {
        this.temp = (+id.charAt(this.i)) * 2;
        if (this.temp > 9) {
          this.temp = Math.floor((this.temp / 10)) + (this.temp % 10);
          console.log("add " + id[this.i])
        }

        this.sum += this.temp;
        console.log("sum  = " + this.sum)
      }
    }
    //בדיקת הסיכום
    if (this.sum % 10 == 0) {
      return true;
    }
    else
      return false;

  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'try.html',
})

export class try1 {


  constructor(private authService: AuthService) { }

}



// IdCorrect(): boolean {

//   this.sum = 0;//לסיכום החישוב

//   for (this.i = 0; this.i < 9; this.i++) {
//     //אם האינדקס זוגי מכפיל באחד ומכניס לסיכום
//     if (this.i % 2 == 0) {
//       this.c = +(this.newWorker.idWorker[this.i])
//       this.sum  += this.c;
//     }
//     //אם האינדקס זוגי מכפיל ב-2
//     //ובודק אם התוצאה דו סםרתית מחבר את האחדות והעשרות
//     //התוצאה מוכנסת לסיכום
//     else {
//       this.temp = (+(this.newWorker.idWorker[this.i])) * 2;
//       if (this.temp > 9) {
//         this.temp = (this.temp / 10) + (this.temp % 10);
//       }
//       this.sum += this.temp;
//     }
//   }
//   //בדיקת הסיכום
//   if (this.sum % 10 == 0) {
//     return true;
//   }
//   else
//     return false;

// }