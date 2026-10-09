import { Specialite, StatutRv, TypeRv } from "@features/private/models";

export interface Rv{
    id: number;
    date: string;
    heure: string;
    specialite: Specialite;
    type: TypeRv;
    statut: StatutRv;
    motif: string;
    medecin: string;
}
export interface RvFiltre {
    statut?: StatutRv | '';
    page?: number;
    size?: number;
}
export interface RvListeReponse {
    pages: number[]
    totalItems: number;
    currentPage: number;
    totalPages: number;
    data: Rv[];
    size: number;
}