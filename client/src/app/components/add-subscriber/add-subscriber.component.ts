import { Component, OnInit } from '@angular/core';
import { SubscribersService } from 'src/app/servises/subscribers.service';
import { subscribers } from 'src/app/classes/subscribers';
import { SubcriptionTypesService } from 'src/app/servises/subcription-types.service';
import { subcription_types } from 'src/app/classes/subcription_types';
import { FormControl, Validators } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { try1 } from '../add-worker/add-worker.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-add-subscriber',
  templateUrl: './add-subscriber.component.html',
  styleUrls: ['./add-subscriber.component.css']
})
export class AddSubscriberComponent implements OnInit {

  newSubsriber: subscribers = new subscribers();
  id: number = null;
  workerTypes: string[] = ['מנהל', 'ספרנית'];
  link: string = "";
  answer: boolean
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  subscriptionTypes: subcription_types[];
  constructor(private subscribersService: SubscribersService, private matDialog: MatDialog, private router: Router, private subcriptionTypesService: SubcriptionTypesService, private activatedRoute: ActivatedRoute) { }

  savaSubscriber() {
    if (this.id == -1) {
      if (this.IdCorrect(this.newSubsriber.id.toString()) == true) {

        this.newSubsriber.isDeleted = false;
        this.newSubsriber.startDate = new Date();
        this.subscribersService.createSubscribers(this.newSubsriber).subscribe(res => { this.answer = res })
        console.log(this.answer);
        if (this.answer == true) {
          const dialogRef = this.matDialog.open(try1);
          dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
            this.router.navigate(['/subscribers'])
          });
        }

      }
      else
        alert("תז אינה תקינה")
    }
    else {
      this.subscribersService.updateSubscribers(this.newSubsriber).subscribe(res => { this.answer = res })
      if (this.answer == true) {
        const dialogRef = this.matDialog.open(try1);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
          this.router.navigate(['/subscribers'])
        });

      }
    }
  }

  ngOnInit(): void {



    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id == -1) {
      this.newSubsriber = new subscribers();
    }
    else {
      this.subscribersService.getAllSubscribersById(this.id).subscribe((data: subscribers[]) => { this.newSubsriber = data[0] });
    }
    this.subcriptionTypesService.getAllSubcription_types().subscribe((data: subcription_types[]) => { this.subscriptionTypes = data; console.log(this.subscriptionTypes); });
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
