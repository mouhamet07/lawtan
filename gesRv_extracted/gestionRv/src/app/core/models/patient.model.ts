export interface PatientModel {
  id: number
  nomComplet: string;
  dateNaissance: Date;
  telephone: string;
  adresse: string;
  email: string;
  motDePasse: string;
  groupeSanguin?: string;
  allergies?: string;
  maladiesChroniques?: string;
}
export type PatientModelRequest = Omit<PatientModel, 'id'>;
