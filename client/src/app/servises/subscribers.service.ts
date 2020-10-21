import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { subscribers } from '../classes/subscribers';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  constructor(private http: HttpClient) { }

  getAllSubscribers() {
    return this.http.get(environment.api + "subscriber/GetSubscribers");
  }

  getAllSubscribersById(id:number) {
    return this.http.get(environment.api + "subscriber/GetSubscriberById/"+id );
  }

  createSubscribers(subscribers: subscribers): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'subscriber/AddSubscriber', subscribers)
  }


  updateSubscribers(subscribers: subscribers): Observable<boolean> {
    return this.http.post<boolean>(environment.api + 'subscriber/UpdateSubscriber', subscribers)
  }

  deleteCopy(id: number): Observable<boolean> {
    return this.http.delete<boolean>(environment.api + 'subscriber/DeleteSubscriber/'+ id)
  }

}
