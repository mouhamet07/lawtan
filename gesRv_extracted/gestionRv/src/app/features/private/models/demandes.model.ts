import { Specialite, StatutDemande, TypeRv } from "@features/private/models";

export interface DemandeInterface {
    id: number;
    date: string;
    heure: string;
    specialite: Specialite;
    type: TypeRv;
    motif: string;
    statut: StatutDemande;
}
export interface DemandeFiltre {
    specialite?: Specialite | '';
    statut?: StatutDemande;
    page?: number;
    size?: number;
}
export interface DemandeListeReponse {
    pages: number[]
    totalItems: number;
    currentPage: number;
    totalPages: number;
    data:DemandeInterface[];
    size: number;
}
export type DemandeModelRequest = Omit<DemandeInterface, 'id' | 'statut'>;
