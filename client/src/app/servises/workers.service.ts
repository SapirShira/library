import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private http:HttpClient) { }

  getAllWorkers()
  {
    return this.http.get(environment.api+"worker/getWorkers");
  }
}
