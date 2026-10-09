import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { DASHBOARD_SERVICE } from '@features/private/dashboard/services/interfaces/dashboard.interface.service';
import { DEMANDE_SERVICE } from '@features/private/demande-rv/services/interfaces/demande.interface.service';
import { RV_SERVICE } from '@features/private/rv/services/interfaces/rv.interface.service';
import { DOSSIER_MEDICAL_SERVICE } from '@features/private/dossier-medical/services/interfaces/dossier-medical.interface.service';
import { PATIENT_SERVICE } from '@core/services/interfaces/patient.interface.service';
import { SECURITY_SERVICE } from '@core/services/interfaces/security.interface.service';
import { SecurityService } from '@core/services/security.service';
import { provideHttpClient } from '@angular/common/http';
import { DashboardService } from '@features/private/dashboard/services/dashboard.service';
import { DemandeService } from '@features/private/demande-rv/services/demande.service';
import { RvService } from '@features/private/rv/services/rv.service';
import { DossierMedicalService } from '@features/private/dossier-medical/services/dossier-medical.service';
import { PatientService } from '@core/services/patient.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: DASHBOARD_SERVICE, useClass: DashboardService },
    { provide: DEMANDE_SERVICE, useClass: DemandeService },
    { provide: RV_SERVICE, useClass: RvService },
    { provide: DOSSIER_MEDICAL_SERVICE, useClass: DossierMedicalService },
    { provide: PATIENT_SERVICE, useClass: PatientService },
    { provide: SECURITY_SERVICE, useClass: SecurityService }
  ]
};
