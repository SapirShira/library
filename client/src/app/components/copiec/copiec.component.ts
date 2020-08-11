import { Component, OnInit } from '@angular/core';
import { CopiecService } from 'src/app/servises/copiec.service';
import { copiec } from 'src/app/classes/copiec';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-copiec',
  templateUrl: './copiec.component.html',
  styleUrls: ['./copiec.component.css']
})
export class CopiecComponent implements OnInit {
  copies: copiec[]=[];
  dataSource: copiec[];
  displayedColumns: string[] = ['codeCopy', 'serial', 'price', 'status'];
  id:number=null;
 

  constructor(private activatedRoute :ActivatedRoute,private copiecService: CopiecService) {
    
   }

  

  ngOnInit(): void {
    this.id=+this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id==null)
    {
      this.copiecService.getAllCopiec().subscribe((data: copiec[]) => { this.copies = data });
    }
    else{
      this.copiecService.getCopiecByCodeBook(this.id).subscribe((data: copiec[]) => { this.copies = data });

    }
  }

}
