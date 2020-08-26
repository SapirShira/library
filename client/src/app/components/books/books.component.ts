import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { BookService } from 'src/app/servises/book.service';
import { Book } from 'src/app/classes/book';
import { CrowdService } from 'src/app/servises/crowd.service';
import { crowd } from 'src/app/classes/crowd';




@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  books: Book[];
  dataSource: Book[];
  displayedColumns: string[] = ['codeBooke', 'name', 'author', 'date', 'crowd', 'category', 'numOtakim', 'otakim'];
  constructor(private bookServise: BookService, private crowdService:CrowdService) { }

  

  ngOnInit(): void {
    this.bookServise.getAllBooks().subscribe((data: Book[]) => { this.books = data });
    
    //this.dataSource=this.books;



  }

}
