import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { worker } from '../classes/workes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {


  constructor(private http: HttpClient) { }


  getAllWorkers() {
    return this.http.get(environment.api + "worker/GetWorkers");
  }

  GetWorkerById(id: number) {
    return this.http.get(environment.api + "worker/GetWorkerById/" + id);
  }


  createWorkers(workers: worker): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'worker/AddWorker', workers)
  }


  updateWorker(worker: worker): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'worker/UpdateWorker', worker)
  }

  deleteWorker(id: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.api + 'worker/DeleteWorker/' + id)
  }

}
