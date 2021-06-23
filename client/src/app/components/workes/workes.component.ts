import { Component, Inject, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/servises/workers.service';
import { worker } from 'src/app/classes/workes';
import { Router } from '@angular/router';
import { DialogData } from '../copiec/copiec.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-workes',
  templateUrl: './workes.component.html',
  styleUrls: ['./workes.component.css']
})
export class WorkesComponent implements OnInit {

  displayedColumns: string[] = ['idWorker', 'name', 'address', 'phone', 'typeWork', 'password', 'update', 'garbege'];
  workers: worker[];



  constructor(private workersService: WorkersService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      e => { this.workerList() });
    this.workerList()
  }

  workerList() {
    this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data });
  }

  delete(id: number) {

    const dialogRef = this.dialog.open(delete1, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.workersService.deleteWorker(id).subscribe(res =>
        this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data }));
    });
  }


}



@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'delete.html',
})
export class delete1 {

  constructor(
    public dialogRef: MatDialogRef<delete1>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}