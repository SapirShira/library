import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
