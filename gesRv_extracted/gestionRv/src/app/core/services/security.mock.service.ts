import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { User, UserLoginReponse, UserLoginRequest } from '@core/models/user.model';
import { MOCK_USERS } from '@mock/users.login.mock';
import { SecurityInterfaceService } from './interfaces/security.interface.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityMockService implements SecurityInterfaceService {
  private readonly TOKEN_KEY = 'token';
  private readonly USER_KEY = 'current-user';
  constructor() {}
  login(request: UserLoginRequest): Observable<UserLoginReponse> {
    const users = [...MOCK_USERS];
    const user = users.find(
      u => u.email === request.email && u.password === request.password
    );
    if (user) {
      const response: UserLoginReponse = {
        token: 'fake-jwt-token',
        user: user
      };
      this.saveLocalStorage(response);
      return of(response);
    }
    return throwError(() => new Error('Identifiants invalides'));
  }
  private saveLocalStorage(userLoginReponse: UserLoginReponse): void {
    localStorage.setItem(this.TOKEN_KEY, userLoginReponse.token!);
    localStorage.setItem(this.USER_KEY, JSON.stringify(userLoginReponse.user));
  }
  getCurrentUser(): Observable<UserLoginReponse | null> {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson) {
      return of({ user: JSON.parse(userJson) });
    }
    return of(null);
  }
  isAuthenticated(): Observable<boolean> {
    return of(localStorage.getItem(this.TOKEN_KEY) !== null);
  }
  logout(): Observable<boolean> {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    return of(true);
  }
}
