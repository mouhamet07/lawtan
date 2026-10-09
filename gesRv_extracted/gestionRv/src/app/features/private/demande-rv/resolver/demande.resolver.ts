import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { DemandeInterfaceService, DEMANDE_SERVICE } from '@features/private/index';
import { DemandeFiltre } from '@features/private/models/demandes.model';

export const demandeResolver: ResolveFn<any> = () => {

  const demandeService = inject(DEMANDE_SERVICE) as DemandeInterfaceService;

  const filtre: DemandeFiltre = {
    specialite: '',
    statut: 'En Attente',
    page: 1
  };

  return demandeService.getDemandes(filtre);
};
