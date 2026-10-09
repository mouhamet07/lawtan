import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserLoginReponse, UserLoginRequest } from '@core/models/user.model';
import { HttpClient } from '@angular/common/http';
import { SecurityInterfaceService } from './interfaces/security.interface.service';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SecurityService implements SecurityInterfaceService{
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'current-user';
  private readonly apiUrl = environment.userUrl;
  private currentUserSubject = new BehaviorSubject<UserLoginReponse|null> (null);
  private currentUser$:Observable<UserLoginReponse|null> = this.currentUserSubject.asObservable();
  private isAuthSubject = new BehaviorSubject<boolean> (false);
  constructor(private http: HttpClient) {}
  login(request: UserLoginRequest): Observable<UserLoginReponse> {
    return this.http
      .get<User[]>(`${this.apiUrl}?email=${request.email}&password=${request.password}`)
      .pipe(
        map((users: User[]) => {
          if (users.length > 0) {
            const user = users[0];
            const response: UserLoginReponse = {
              token: 'fake-jwt-token',
              user: user
            };
            this.saveLocalStorage(response);
            this.currentUserSubject.next(response);
            this.isAuthSubject.next(true);
            return response;
          }
          throw new Error('Identifiants invalides');
        })
      );
  }
  private saveLocalStorage(userLoginResponse: UserLoginReponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginResponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginResponse.user));
  }
  getCurrentUser(): UserLoginReponse | null {
    return this.currentUserSubject.getValue();
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.TOKEN_KEY) !== null;
  }
  logout(): Observable<boolean> {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    return of(true);
  }
}
