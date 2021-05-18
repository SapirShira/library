import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/servises/workers.service';
import { worker } from 'src/app/classes/workes';
import { Router } from '@angular/router';


@Component({
  selector: 'app-workes',
  templateUrl: './workes.component.html',
  styleUrls: ['./workes.component.css']
})
export class WorkesComponent implements OnInit {

  displayedColumns: string[] = ['idWorker', 'name', 'address', 'phone', 'typeWork', 'password', 'update', 'garbege'];
  workers: worker[];



  constructor(private workersService: WorkersService, private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(
      e => { this.workerList()});
      this.workerList()
  }

  workerList()
  {
    this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data });
  }

  delete(id:number) {
    
    this.workersService.deleteWorker(id).subscribe(res=>
      this.workersService.getAllWorkers().subscribe((data: worker[]) => { this.workers = data }));
  }

}
