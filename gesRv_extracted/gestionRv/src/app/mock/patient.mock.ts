import { PatientModel } from "@core/models/patient.model";

export const MOCK_PATIENTS: PatientModel[] = [
    {
        id: 1,
        nomComplet: 'Dupont Jean',
        dateNaissance: new Date('1990-01-01'),
        telephone: '771234567',
        adresse: '123 Rue de la Paix',
        email: 'jean.dupont@example.com',
        motDePasse: 'patient123',
        groupeSanguin: 'A+',
        allergies: 'Pollen',
        maladiesChroniques: 'Asthme'
    },
    {
        id: 2,
        nomComplet: 'Martin Marie',
        dateNaissance: new Date('1985-05-15'),
        telephone: '789876543',
        adresse: '456 Avenue des Champs-Élysées',
        email: 'marie.martin@example.com',
        motDePasse: 'patient123',
        groupeSanguin: 'B-',
        allergies: '',
        maladiesChroniques: ''
    }
];
