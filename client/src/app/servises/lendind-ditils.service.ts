import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lending_ditills } from '../classes/lending_ditills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LendindDitilsService {

  constructor(private http: HttpClient) { }
  getAllLendind_ditils() {
    return this.http.get(environment.api + "lendingItem/GetLendingItems");
  }
  createLendind_ditils(lendind_ditils: lending_ditills): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'lendingItem/AddGetLendingItem', lendind_ditils)
  }

  returnD(code: number): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'lendingItem/returnD', code);
  }

}


