import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environments/environment'; // Import environment variables

@Injectable({
  providedIn: 'root', //Makes this service available globally
})
export class MasterService {
  private apiUrl = `${environment.apiBaseUrl}/posts`; // Example API URL

  constructor(private http: HttpClient) {} //Injects HttpClient into the service to make API calls

  //API Methods-to handle api request
  // Sends a GET request to fetch all posts.
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError) // Handle errors
    );
  }

  /*getPostById(id: number): Observable<any> {
    return this.http
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  createPost(postData: any): Observable<any> {
    return this.http
      .post<any>(this.apiUrl, postData)
      .pipe(catchError(this.handleError));
  }

  updatePost(id: number, postData: any): Observable<any> {
    return this.http
      .put<any>(`${this.apiUrl}/${id}`, postData)
      .pipe(catchError(this.handleError));
  }

  deletePost(id: number): Observable<any> {
    return this.http
      .delete<any>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }*/

  // Centralized Error Handling Function
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
