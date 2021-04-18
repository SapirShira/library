import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { worker } from '../classes/workes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }
    worker:worker=new worker();
  
  GetWorkerById(id:number) {
    return this.http.get(environment.api + "worker/GetWorkerById/"+id );

  }

  login0(name:string, password: string):boolean
  {
    this.GetWorkerById(+name).subscribe((data: worker[]) => { this.worker = data[0] });
    console.log(this.worker.name);
    console.log(this.worker.password);
    if(password==this.worker.password)
    {
      this.login(name, password);
      return true;
    }
    return false;
  }
  login(name:string, password: string)
  {
    const currentUser={"name":name, "password": password};
    localStorage.setItem("currentUser", JSON.stringify(currentUser));   
  }


  logout()
  {
    localStorage.removeItem("currentUser");
  }

  isLogin()
  {
    if(localStorage.getItem("currentUser"))
    {
      return true;
    }

    return false;
  }
}
