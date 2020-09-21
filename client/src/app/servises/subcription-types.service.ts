import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { subcription_types } from '../classes/subcription_types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubcriptionTypesService {

  constructor(private http:HttpClient) { }
  getAllSubcription_types()
  {
    return this.http.get(environment.api+"subscriptionType/GetSubscriptionTypes");
  }
  createSubcription_types(subcription_types:subcription_types):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'subscriptionType/AddSubscriptionType',subcription_types)
  }
  
}
