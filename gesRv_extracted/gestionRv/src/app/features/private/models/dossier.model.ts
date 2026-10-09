import { GroupeSanguin, Specialite, StatutMaladie } from "@features/private/models";
export interface Adresse {
    quartier: string;
    ville: string;
    pays: string;
}
export interface Maladie {
    id: number;
    nom: string;
    dateDiagnostic: string;
    medecin: string;
    specialite: Specialite;
    statut: StatutMaladie;
}
export interface Consultation {
    id: number;
    date: string;
    medecin: string;
    specialite: Specialite;
    motif: string;
    documents?: string[]; 
}
export interface Medicament {
    nom: string;
    dosage: string;   
    forme?: string;  
}
export interface Ordonnance {
    id: string;       
    date: string;
    medecin: string;
    specialite: Specialite;
    medicaments: Medicament[];
    diagnostic: string;
    prescriptions: string[];
    recommandations: string[];
}
export interface Patient {
    id: string;              
    nomComplet: string;
    dateNaissance: string;
    age: number;
    telephone: string;
    email: string;
    adresse: Adresse;
    groupeSanguin: GroupeSanguin;
    allergies: string[];
    maladies: Maladie[];
    consultations: Consultation[];
    ordonnances: Ordonnance[];
}
