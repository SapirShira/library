import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LendingService } from 'src/app/servises/lending.service';
import { lending } from 'src/app/classes/lending';
import { LendindDitilsService } from 'src/app/servises/lendind-ditils.service';
import { lending_ditills } from 'src/app/classes/lending_ditills';
import { newLendingDitaile } from 'src/app/classes/newLendingDitaile';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {

  newLending: lending = new lending();
  lendingDitils: lending_ditills[] = null;
  newLendingDitail: lending_ditills = new lending_ditills();
  displayedColumns: string[] = ['serial', 'bookName', 'comment', 'return'];
  codelend: number = null;
  newData: newLendingDitaile = null;

  constructor(private lendingService: LendingService, private lendingDitilsService: LendindDitilsService) { }

  ngOnInit(): void {

  }

  returnD(code: number) {
    this.lendingDitilsService.returnD(code).subscribe(res =>
      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
        this.lendingDitils = data.lendingItemsToSub;
        this.codelend = data.code
      }));
    
    
  }

  addLend() {
    this.newLending.date = new Date();
    this.lendingService.createLending(this.newLending).subscribe(res =>

      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
        this.lendingDitils = data.lendingItemsToSub;
        this.codelend = data.code
      }));

  }

  addBookToLend() {
    this.newLendingDitail.codeLending=this.codelend;
    this.lendingDitilsService.createLendind_ditils(this.newLendingDitail).subscribe(res =>

      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
        this.lendingDitils = data.lendingItemsToSub;
        this.codelend = data.code
      }));
  }


}
