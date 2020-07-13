import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LendindDitilsService {

  constructor(private http:HttpClient) { }
  getAllLendind_ditils()
  {
    return this.http.get(environment.api+"lendind-ditils/getLendind-ditils");
  }
  createLendind_ditils(lendind_ditils:lendind_ditils):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'lendind_ditils/AddLendind_ditils',lendind_ditils)
  }
}

  
