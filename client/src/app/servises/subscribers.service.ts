import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private http:HttpClient) { }

  getAllSubscribers()
  {
    return this.http.get(environment.api+"subscribers/getBookSubscriberss");
  }
  createSubscribers(subscribers:subscribers):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'subscribers/AddSubscribers',subscribers)
  }
}
