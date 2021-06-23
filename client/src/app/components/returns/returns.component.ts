import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  displayedColumns: string[] = ['serial', 'bookName', 'comment', 'return'];
  list = [];
  returnTable: MatTableDataSource<lending_ditills[]> = new MatTableDataSource<lending_ditills[]>(this.list);

  constructor(private lendingService: LendingService, private lendingDitilsService: LendindDitilsService) { }

  ngOnInit(): void {
    // this.bookServise.getAllBooks().subscribe((data: Book[]) => { this.books = data });
  }

  bring() {
    this.lendingDitilsService.GetItemToReturn(this.code).subscribe((data: lending_ditills) => {
      console.log(data)

      if (data) {
        this.returnItem = data; this.list.push(this.returnItem)
        this.returnTable = new MatTableDataSource<lending_ditills[]>(this.list);
        console.log(this.returnTable)
      }
      else
        alert("עותק אינו מושאל")
    });

  }

  returnD(code: number) {
    this.lendingDitilsService.returnD(code).subscribe(res => { }
      // this.lendingDitilsService.getAllLendind_ditils().subscribe((data: newLendingDitaile) => {
      //   this.lendingDitils = data.lendingItemsToSub;
      //   this.codelend = data.code
      // })
    );


  }

}
