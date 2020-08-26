import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { categories } from '../classes/categories';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  getAllCategory()
  {
    return this.http.get(environment.api+"category/GetCategorys");
  }

  createCategory(category:categories):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'category/AddCategory',category)
  }
}
