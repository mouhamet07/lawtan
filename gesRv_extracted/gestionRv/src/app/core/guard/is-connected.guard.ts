import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from '@core/services/security.service';
import { inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { SecurityInterfaceService } from '@core/services/interfaces/security.interface.service';

export const isConnectedGuard: CanActivateFn = async (route, state) => {
  let securityService: SecurityInterfaceService = inject(SecurityService);
  let router = inject(Router);

  try {
    const isAuth = securityService.isAuthenticated();
    if (isAuth) {
      return true;
    }
  } catch (error) {
    console.error('Erreur lors de la vérification d\'authentification:', error);
  }

  router.navigate(['/public/login']);
  return false;
};
