import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcriptionTypesService {

  constructor(private http:HttpClient) { }
  getAllSubcription-types()
  {
    return this.http.get(environment.api+"subcription-types/getSubcription-types");
  }

  
}
