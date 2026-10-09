import { detailsRv } from "@features/private/models/details.model";

export const MOCK_DETAILS: detailsRv = {
    id: 1,
    date: '2024-07-07',
    heure: '10:00',
    specialite: 'Cardiologie',
    type: 'Consultation',
    medecin: 'Dr. Martin Pierre',
    patient: {
        id: '101',
        nomComplet: 'Jean Dupont',
        dateNaissance: '1980-03-15',
        age: 44,
        telephone: '+221771234567',
        email: 'jean.dupont@mail.com',
        adresse: {
            quartier: 'Plateau',
            ville: 'Dakar',
            pays: 'Sénégal'
        },
        groupeSanguin: 'O+',
        allergies: [],
        maladies: [],
        consultations: [],
        ordonnances: []
    },
    ordonnance: {
        id: 'ord-001',
        date: '2024-07-07',
        medecin: 'Dr. Martin Pierre',
        specialite: 'Cardiologie',
        medicaments: [
            { nom: 'Amlodipine', dosage: '5mg', forme: 'Comprimé' },
            { nom: 'Aspirine', dosage: '100mg', forme: 'Comprimé' }
        ],
        diagnostic: 'Hypertension artérielle',
        prescriptions: [
            'Amlodipine 5mg - 1 comprimé par jour',
            'Aspirine 100mg - 1 comprimé par jour'
        ],
        recommandations: [
            'Réduction du sel',
            'Activité physique régulière',
            'Contrôle tension hebdomadaire'
        ]
    },
    analyses: [
        {
            id: 1,
            examen: 'Glycémie',
            resultat: '1.25 g/L',
            normes: '0.70 - 1.10 g/L',
            statut: 'Élevé'
        },
        {
            id: 2,
            examen: 'Cholestérol total',
            resultat: '1.90 g/L',
            normes: '< 2.00 g/L',
            statut: 'Normal'
        },
        {
            id: 3,
            examen: 'Tension artérielle',
            resultat: '14/9',
            normes: '12/8',
            statut: 'Élevé'
        }
    ]
}