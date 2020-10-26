import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/servises/workers.service';
import { worker } from 'src/app/classes/workes';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  constructor(private workerService: WorkersService, private activatedRoute: ActivatedRoute) { }

  newWorker: worker = new worker();
  id: number = null;
  types:string[]=['ספרנית', 'מנהל/ת']

  ngOnInit(): void {


    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id == -1) {
      this.newWorker = new worker();
    }
    else {
      this.workerService.GetWorkerById(this.id).subscribe((data: worker[]) => { this.newWorker = data[0] });
    }
  }
  



  savaWorker() {
    if (this.id == -1) {
      this.newWorker.status = true;
      this.workerService.createWorkers(this.newWorker).subscribe(res => { })
    }
    else {
      this.workerService.updateWorker(this.newWorker).subscribe(res => { })
    }
  }

}
