import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { copiec } from '../classes/copiec';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopiecService {

  constructor(private http: HttpClient) { }

  getAllCopiec() {
    return this.http.get(environment.api + "copy/GetCopies");
  }

  getCopiecByCodeBook(code:number) {
    return this.http.get(environment.api + "copy/GetCopiesByCodeBook/"+code );
  }

  createCopiec(copiec: copiec): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'copy/AddCopiec', copiec)
  }
}
