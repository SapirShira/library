import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LendingService } from 'src/app/servises/lending.service';
import { lending } from 'src/app/classes/lending';
import { LendindDitilsService } from 'src/app/servises/lendind-ditils.service';
import { lending_ditills } from 'src/app/classes/lending_ditills';

@Component({
  selector: 'app-lending',
  templateUrl: './lending.component.html',
  styleUrls: ['./lending.component.css']
})
export class LendingComponent implements OnInit {

  newLending:lending=new lending();
lendingDitils:lending_ditills[]=null;
displayedColumns:string[]=['serial', 'bookName', 'comment', 'return'];

  constructor(private lendingService:LendingService, private lendingDitilsService:LendindDitilsService) { }

  ngOnInit(): void {
    
  }

  returnD(code:number)
  {
    this.lendingDitilsService.returnD(code).subscribe(res=>
      this.lendingService.getAllLending().subscribe((data: lending_ditills[]) => { this.lendingDitils = data }));
  }

  addLend()
  {
this.newLending.date=new Date();
    this.lendingService.createLending(this.newLending).subscribe(res =>

      this.lendingDitilsService.getAllLendind_ditils().subscribe((data: lending_ditills[]) => { this.lendingDitils = data }));
    
  }

}
