import { UserLoginReponse, UserLoginRequest } from "@core/models/user.model";
import { Observable } from "rxjs";
import { InjectionToken } from '@angular/core';

export interface  SecurityInterfaceService {
  login(request: UserLoginRequest): Observable<UserLoginReponse>;
  getCurrentUser(): UserLoginReponse | null;
  isAuthenticated(): boolean;
  logout(): Observable<boolean>;
}

export const SECURITY_SERVICE = new InjectionToken<SecurityInterfaceService>('SecurityInterfaceService');
