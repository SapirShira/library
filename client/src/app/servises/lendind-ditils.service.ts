import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lending_ditills } from '../classes/lending_ditills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LendindDitilsService {

  constructor(private http:HttpClient) { }
  getAllLendind_ditils()
  {
    return this.http.get(environment.api+"lendind-ditils/getLendind-ditils");
  }
  createLendind_ditils(lendind_ditils:lending_ditills):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'lendind_ditils/AddLendind_ditils',lendind_ditils)
  }
}

  
