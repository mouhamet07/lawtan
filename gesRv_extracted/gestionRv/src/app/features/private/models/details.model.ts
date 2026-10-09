import { Ordonnance, Patient, StatutAnalyse } from "@features/private/models";

export interface Analyse{
    id: number;
    examen: string;
    resultat: string;
    normes: string;
    statut: StatutAnalyse;
}
export interface detailsRv{
    id: number;
    date: string;
    heure: string;
    specialite: string;
    type: string;
    medecin: string;
    ordonnance: Ordonnance;
    analyses: Analyse[];
    patient: Patient;
}