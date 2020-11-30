import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Todo} from '../model/Todo.model'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
  baseUri:string = '/api/todos';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


    // Get all Todos
    getTodos(): Observable<Todo[]>  {
      return this.http.get<Todo[]>(this.baseUri).pipe(catchError(this.errorMgmt));
    }
  
    // Create Todo
    createTodo(data): Observable<Todo> {
      return this.http.post<Todo>(this.baseUri, data).pipe(catchError(this.errorMgmt))
    }

    // Update Todo
    updateTodo(data): Observable<Todo> {
        let url = `${this.baseUri}/${data.id}`;
      return this.http.put<Todo>(url, data, { headers: this.headers }).pipe(catchError(this.errorMgmt))
    }

    // Delete Todo
    deleteTodo(id:number): Observable<Todo> {
      let url = `${this.baseUri}/${id}`;
      return this.http.delete<Todo>(url, { headers: this.headers }).pipe(catchError(this.errorMgmt))
    }

    // Error handling 
    errorMgmt(error: HttpErrorResponse) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
    }
}