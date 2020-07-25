import { Component, OnInit } from '@angular/core';
import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
import { BookService } from 'src/app/servises/book.service';
import { Book } from 'src/app/classes/book';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }
  books: Book[];
  dataSource=this.books;
  constructor(private bookServise: BookService) { }

  ngOnInit(): void {
    this.bookServise.getAllBooks().subscribe((data: Book[]) => { this.books = data });
    

  }

}
