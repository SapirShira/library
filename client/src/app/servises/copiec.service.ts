import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CopiecService {

  constructor(private http:HttpClient) { }
  
  getAllCopiec()
  {
    return this.http.get(environment.api+"copiec/getCopiecs");
}
