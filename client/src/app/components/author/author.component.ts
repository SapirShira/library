import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/servises/author.service';
import { Author } from 'src/app/classes/author';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors:Author[]=[];
  displayedColumns:string[]=['codAauthor', 'firstName', 'lastName', 'LiteraryAlias'];

  constructor(private authorService:AuthorService, private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      e => { this.authorList()});
      this.authorList()
  }
  authorList()
  {
    this.authorService.getAllAuthor().subscribe((data:Author[])=>{this.authors=data});

  }

}
