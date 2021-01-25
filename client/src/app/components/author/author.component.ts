import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/servises/author.service';
import { Author } from 'src/app/classes/author';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  authors:Author[]=[];
  displayedColumns:string[]=['codAauthor', 'firstName', 'lastName', 'LiteraryAlias'];

  constructor(private authorService:AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAllAuthor().subscribe((data:Author[])=>{this.authors=data});
  }

}
