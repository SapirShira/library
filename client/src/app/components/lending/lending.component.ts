import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LendingService } from 'src/app/servises/lending.service';
import { lending } from 'src/app/classes/lending';
import { LendindDitilsService } from 'src/app/servises/lendind-ditils.service';
import { lending_ditills } from 'src/app/classes/lending_ditills';
import { newLendingDitaile } from 'src/app/classes/newLendingDitaile';
import { AuthService } from 'src/app/servises/auth.service';
import { subscribers } from 'src/app/classes/subscribers';
import { SubscribersService } from 'src/app/servises/subscribers.service';



@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {

  newLending: lending = new lending();
  lendingDitils: lending_ditills[] = null;
  newLendingDitail: lending_ditills = new lending_ditills();
  displayedColumns: string[] = ['serial', 'bookName', 'comment', 'expectedReturnDate', 'return'];
  codelend: number = null;
  newData: newLendingDitaile = null;
  newSubsriber: subscribers = new subscribers();
  sum: number = 0;


  constructor(private lendingService: LendingService, private subscribersService: SubscribersService, private lendingDitilsService: LendindDitilsService, private authService: AuthService) { }

  ngOnInit(): void {

  }

  returnD(code: number) {
    this.lendingDitilsService.returnD(code).subscribe(res =>
      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
        this.lendingDitils = data.lendingItemsToSub;
        this.codelend = data.code
        this.sum = this.newSubsriber.numOfBooks - this.lendingDitils.length;
        console.log("כמות הספרים שנותר להשאיל: " + this.sum)
      }));


  }
  ans: boolean
  flag: boolean
  addLend() {
    this.lendingDitils=null
    this.newLending.worker = this.authService.worker.idWorker;
    this.newLending.date = new Date();
    this.lendingService.createLending(this.newLending).subscribe(res => {
      this.ans = res
      if (this.ans) {
        console.log("res: " + res + " ans: " + this.ans)
        this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
          console.log(data.code)
          if (data.lendingItemsToSub) {
            this.lendingDitils = data.lendingItemsToSub;
            console.log(this.lendingDitils[this.lendingDitils.length - 1].codeOtek, this.lendingDitils[this.lendingDitils.length - 1].expectedReturnDate)

          }
          this.codelend = data.code
          this.subscribersService.getAllSubscribersById(this.newLending.idSubscribers).subscribe((data: subscribers[]) => {
            console.log(data[0].firstName)
            this.newSubsriber = data[0],

              console.log("מנוי " + this.newSubsriber.firstName)
            if (this.lendingDitils)
              this.sum = this.newSubsriber.numOfBooks - this.lendingDitils.length;
            else
              this.sum = this.newSubsriber.numOfBooks
            console.log("כמות הספרים שנותר להשאיל: " + this.sum)


          });

        })
        this.flag = true
      }
      else {
        alert("מנוי לא קיים או שת.ז. אינה תקינה")
      }

    });

  }

  addBookToLend() {
    this.newLendingDitail.codeLending = this.codelend;
    this.lendingDitilsService.createLendind_ditils(this.newLendingDitail).subscribe(res => {
      console.log(res)
      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
        console.log("data: " + data[0])
        this.lendingDitils = data.lendingItemsToSub;
        this.codelend = data.code
        this.sum = this.newSubsriber.numOfBooks - this.lendingDitils.length;
        console.log("כמות הספרים שנותר להשאיל: " + this.sum)
      })
    });
  }


}
