import { Patient } from "@features/private/models/dossier.model";
export const MOCK_DOSSIER: Patient = {
    id: 'PAT-001',
    nomComplet: 'Jean Dupont',
    dateNaissance:'1980-03-15',
    age: 45,
    telephone: '+221771234567',
    email: 'jean.dupont@email.com',

    adresse: {
        quartier: 'Cité Keur Gorgui, Villa 123',
        ville: 'Dakar',
        pays: 'Sénégal'
    },
    groupeSanguin: 'A+',
    allergies: ['Pénicilline', 'Pollen'],
    maladies: [
        {
            id: 1,
            nom: 'Hypertension artérielle',
            dateDiagnostic:'2026-02-15',
            medecin: 'Dr. Martin Pierre',
            specialite: 'Cardiologie',
            statut: 'En traitement'
        },
        {
            id: 2,
            nom: 'Asthme léger',
            dateDiagnostic:'2020-03-20',
            medecin: 'Dr. Sow Aminata',
            specialite: 'Généraliste',
            statut: 'Contrôlée'
        },
        {
            id: 3,
            nom: 'Grippe saisonnière',
            dateDiagnostic:'2025-12-15',
            medecin: 'Dr. Dupont Marie',
            specialite: 'Pédiatrie',
            statut: 'Guérie'
        }
    ],
    consultations: [
        {
            id: 1,
            date:'2026-02-15',
            medecin: 'Dr. Martin Pierre',
            specialite: 'Cardiologie',
            motif: 'Contrôle cardiaque',
            documents: ['compte-rendu.pdf']
        },
        {
            id: 2,
            date:'2026-01-05',
            medecin: 'Dr. Laurent Jean',
            specialite: 'Neurologie',
            motif: 'Consultation générale'
        },
        {
            id: 3,
            date:'2025-12-28',
            medecin: 'Dr. Ndiaye Fatou',
            specialite: 'Radiologie',
            motif: 'Examen de la vue'
        },
        {
            id: 4,
            date:'2025-12-15',
            medecin: 'Dr. Dupont Marie',
            specialite: 'Pédiatrie',
            motif: 'Grippe'
        }
    ],
    ordonnances: [
        {
            id: 'ORD-2026-001',
            date:'2026-02-15',
            medecin: 'Dr. Martin Pierre',
            specialite: 'Cardiologie',
            medicaments: [
                { nom: 'Amlodipine', dosage: '5mg', forme: 'comprimé' },
                { nom: 'Aspirine', dosage: '100mg', forme: 'comprimé' }
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
        {
            id: 'ORD-2025-089',
            date:'2025-12-15',
            medecin: 'Dr. Dupont Marie',
            specialite: 'Pédiatrie',
            medicaments: [
                { nom: 'Paracétamol', dosage: '1g', forme: 'comprimé' },
                { nom: 'Ibuprofène', dosage: '400mg', forme: 'comprimé' }
            ],
            diagnostic: 'Grippe saisonnière',
            prescriptions: [
                'Paracétamol 1g - 1 comprimé 4 fois par jour',
                'Ibuprofène 400mg - 1 comprimé 3 fois par jour'
            ],
            recommandations: [
                'Repos complet',
                'Hydratation suffisante',
                'Éviter les efforts physiques'
            ]
        },
        {
            id: 'ORD-2025-067',
            date:'2025-03-20',
            medecin: 'Dr. Sow Aminata',
            specialite: 'Dermatologie',
            medicaments: [
                { nom: 'Ventoline', dosage: '100mg', forme: 'inhalateur' }
            ],
            diagnostic: 'Asthme léger',
            prescriptions: [
                'Ventoline 100mg - 2 inhalations en cas de besoin'
            ],
            recommandations: [
                'Éviter les allergènes',
                'Sport modéré',
                'Suivi mensuel recommandé'
            ]
        }
    ]
}