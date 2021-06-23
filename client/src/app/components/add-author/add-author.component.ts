import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/servises/author.service';
import { Author } from 'src/app/classes/Author';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { try1 } from '../add-worker/add-worker.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  newAuthor:Author=new Author();
  id:number;
  answer:boolean
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor(private authorService:AuthorService, private activatedRoute: ActivatedRoute, private router:Router, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

  }

  savaAuthor()
  {
    this.authorService.createAuthor(this.newAuthor).subscribe(res => { this.answer=res})
    if (this.answer == true) {
      const dialogRef = this.matDialog.open(try1);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      this.router.navigate(['/author'])
    });

    }

  }


}
