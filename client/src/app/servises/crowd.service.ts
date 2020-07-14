import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrowdService {

  constructor(private http:HttpClient) { }

  getAllCrowd()
  {
    return this.http.get(environment.api+"crowd/getCrowd");
  }
}