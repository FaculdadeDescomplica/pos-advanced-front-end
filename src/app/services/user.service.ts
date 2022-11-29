import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';
import { UserAuth } from '../models/userAuth';
import { UserReturn } from '../models/userReturn';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL: string = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  /**  POST  user api  ADD User Function  */
  addUser(user: User): Observable<User> {
    console.log(user);
    var url: string = this.BASE_URL + 'users';
    console.log(url)
    return this.http.post<User>(url, user, httpOptions);
  }

  login(data: any): Observable<UserAuth> {
    console.log(data);
    var url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDThl5AbjP3GU4XvtdpBn5ZvVUFVXMJMSA';
    console.log(url)
    return this.http.post<UserAuth>(url, data, httpOptions);

  }
  /**  PUT user api EDIT User Function  */
  editUser(user: any): Observable<User> {
    var url: string = this.BASE_URL + 'users/' + user.id;;
    return this.http.put<User>(url, user, httpOptions);
  }

  getUserById(id: string): Observable<UserReturn> {
    let data = {idToken: localStorage.getItem('token') || ''}
    var url: string = 'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDThl5AbjP3GU4XvtdpBn5ZvVUFVXMJMSA';
    return this.http.post<UserReturn>(url, data, httpOptions).pipe(
      tap((retorno: UserReturn) => {
        console.log(retorno)
      }
      ),
      catchError(this.handleError<UserReturn>('erro ao listar eventos'))
    )
  }

  /**  GET user api Gell All Custmoer Function  */
  getUsers(): Observable<User[]> {
    var url: string = this.BASE_URL + 'users';
    return this.http.get<User[]>(url).pipe(
      tap((retorno: User[]) => {
        console.log('Listando usuários service')
      }
      ),
      catchError(this.handleError<User[]>('erro ao listar eventos'))
    )

  }


  private handleError<T> (operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`EventoService: ${message}`);
  }
  /** DELETE: delete user Function*/
  deleteUser(user: User | string): Observable<User> {
    const id = typeof user === 'string' ? user : user.id;
    var url: string = this.BASE_URL + 'users/' + id;
    return this.http.delete<User>(url, httpOptions);
  }
}
