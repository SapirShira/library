import { Component, OnDestroy, OnInit } from '@angular/core';
import { BookService } from 'src/app/servises/book.service';
import { Book } from 'src/app/classes/book';
import { CrowdService } from 'src/app/servises/crowd.service';
import { crowd } from 'src/app/classes/crowd';
import { AuthorService } from 'src/app/servises/author.service';
import { Author } from 'src/app/classes/author';
import { CategoryService } from 'src/app/servises/category.service';
import { categories } from 'src/app/classes/categories';
import { FormControl } from '@angular/forms';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit, OnDestroy {
  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';


  }
  crowds: crowd[];
  authors: Author[];
  newCrowd: crowd;
  newBook: Book = new Book();
  category: categories[];
  myControl = new FormControl();
  answer: boolean;

  constructor(private bookServise: BookService, private crowdService: CrowdService, private authorService: AuthorService, private categoryService: CategoryService,
    private router: Router, private datePipe: DatePipe) { }

  ngOnDestroy(): void {
    console.log("destroied")
    alert("ff")
    this.router.navigate(['addBook'])
  }



  savaBook() {
    this.bookServise.createBooks(this.newBook).subscribe(res => { this.answer = res })
    if (this.answer == true) {
      this.router.navigate(['/books'])

    }

  }

  ngOnInit(): void {
    this.crowdService.getAllCrowd().subscribe((data: crowd[]) => { this.crowds = data; console.log(this.crowds); });
    this.authorService.getAllAuthor().subscribe((data: Author[]) => { this.authors = data; console.log(this.authors); });
    this.categoryService.getAllCategory().subscribe((data: categories[]) => { this.category = data; console.log(this.category); });
    this.newBook.date = new Date();

    // this.newBook.date = this.datePipe.transform(this.newBook.date, 'yyyy-MM-dd');

  }


  // this.newCrowd=this.crowds[0];

}
