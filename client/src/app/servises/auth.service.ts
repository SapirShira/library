import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { worker } from '../classes/workes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
  worker: worker = new worker();


  GetWorkerById(id: number) {
    return this.http.get(environment.api + "worker/GetWorkerById/" + id);

  }

  login0(name: string, password: string) {
    return this.GetWorkerById(+name)




  }
  login(worker) {
    this.worker = worker;
    const currentUser = { "name": worker.name, "password": worker.password };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }


  logout() {
    localStorage.removeItem("currentUser");
  }

  isLogin() {
    if (localStorage.getItem("currentUser")) {
      return true;
    }

    return false;
  }
}
