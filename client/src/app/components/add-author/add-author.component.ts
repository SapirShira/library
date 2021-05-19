import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/servises/author.service';
import { Author } from 'src/app/classes/Author';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  newAuthor:Author=new Author();
  id:number;
  answer:boolean
  constructor(private authorService:AuthorService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

  }

  savaAuthor()
  {
    this.authorService.createAuthor(this.newAuthor).subscribe(res => { this.answer=res})
    if (this.answer == true) {
      this.router.navigate(['/author'])

    }

  }


}
