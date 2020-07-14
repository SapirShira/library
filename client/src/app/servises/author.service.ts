import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Author } from '../classes/Author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http:HttpClient) { }
  getAllAuthor()
  {
    return this.http.get(environment.api+"author/getAuthor");
  }
  createAuthor(author:Author):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'author/AddAuthor',author)
  }
  
}
