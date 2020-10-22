import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/servises/workers.service';
import { worker } from 'src/app/classes/workes';


@Component({
  selector: 'app-workes',
  templateUrl: './workes.component.html',
  styleUrls: ['./workes.component.css']
})
export class WorkesComponent implements OnInit {

  displayedColumns: string[] = ['idWorker', 'name', 'address', 'phone', 'typeWork', 'password', 'update', 'garbege'];
  workers: worker[];



  constructor(private workersService: WorkersService) { }

  ngOnInit(): void {

    this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data });

  }

  delete(id:number) {
    
    this.workersService.deleteWorker(id).subscribe(res=>
      this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data }));
  }

}
