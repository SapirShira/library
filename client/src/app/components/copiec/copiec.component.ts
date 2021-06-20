import { Component, OnInit, Inject } from '@angular/core';
import { CopiecService } from 'src/app/servises/copiec.service';
import { copiec } from 'src/app/classes/copiec';
import { ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OtekToAddDTO } from 'src/app/classes/OtekToAddDTO';

export interface DialogData {
  amonte: number;
  price: number;
}


@Component({
  selector: 'app-copiec',
  templateUrl: './copiec.component.html',
  styleUrls: ['./copiec.component.css']
})
export class CopiecComponent implements OnInit {
  copies: copiec[] = [];
  dataSource: copiec[];
  displayedColumns: string[] = ['codeCopy', 'serial', 'price', 'status', 'delete'];
  id: number = null;
  newC:OtekToAddDTO={codeB:0, numOt:0};


  constructor(private activatedRoute: ActivatedRoute, private copiecService: CopiecService, public dialog: MatDialog) {

  }

  deleteCopy(codeCopy: number) {
    this.copiecService.deleteCopy(codeCopy).subscribe(res=>
    this.copiecService.getCopiecByCodeBook(this.id).subscribe((data: copiec[]) => { this.copies = data }));
  }


  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.newC.codeB=this.id;
    if (this.id == null) {
      this.copiecService.getAllCopiec().subscribe((data: copiec[]) => { this.copies = data });
    }
    else {
      this.copiecService.getCopiecByCodeBook(this.id).subscribe((data: copiec[]) => { this.copies = data });

    }
  }

  amonte: string;
  price: string;
  openDialog(): void {
    const dialogRef = this.dialog.open(addCopy1, {
      width: '250px',
      data: {amonte: this.amonte, price: this.price}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.amonte = result;
      this.newC.numOt=+this.amonte
      console.log("result "+this.amonte)
      this.copiecService.createCopiec(this.newC).subscribe();
    });
  }

}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'addCopy1.html',
})
export class addCopy1 {

  constructor(
    public dialogRef: MatDialogRef<addCopy1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}