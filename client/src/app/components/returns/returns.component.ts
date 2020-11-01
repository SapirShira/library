import { Component, OnInit } from '@angular/core';
import { lending_ditills } from 'src/app/classes/lending_ditills';
import { LendindDitilsService } from 'src/app/servises/lendind-ditils.service';
import { LendingService } from 'src/app/servises/lending.service';

@Component({
  selector: 'app-returns',
  templateUrl: './returns.component.html',
  styleUrls: ['./returns.component.css']
})
export class ReturnsComponent implements OnInit {
  returnItem: lending_ditills;
  code: number = null;
  displayedColumns: string[] = ['serial', 'bookName', 'comment'];
returnTable:lending_ditills[]=[];

  constructor(private lendingService: LendingService, private lendingDitilsService: LendindDitilsService) { }

  ngOnInit(): void {
    // this.bookServise.getAllBooks().subscribe((data: Book[]) => { this.books = data });
  }

  bring()
  {
    this.lendingDitilsService.GetItemToReturn(this.code).subscribe((data: lending_ditills) => { this.returnItem=data });
    this.returnTable.push(this.returnItem);
  }

}
