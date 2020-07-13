import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcriptionTypesService {

  constructor(private http:HttpClient) { }
  getAllSubcription_types()
  {
    return this.http.get(environment.api+"subcription-types/getSubcription-types");
  }
  createSubcription_types(subcription_types:subcription_types):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'subcription_types/Subcription_types',subcription_types)
  }
  
}
