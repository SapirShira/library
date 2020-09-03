import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from '../classes/book';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {

   }

   getAllBooks()
  {
    return this.http.get(environment.api+"book/getBooks");
  }

  createBooks(books:Book):Observable<boolean>
  {
      return this.http.post<boolean>(environment.api+'book/AddBook',books)
  }
}
