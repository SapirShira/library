import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lending } from '../classes/lending';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LendingService {

  constructor(private http:HttpClient) { }
  getAllLending()
  {
    return this.http.get(environment.api+"lending/getLending");
  }
  createLending(lending:lending):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'lending/AddLending',lending)
  }
}
