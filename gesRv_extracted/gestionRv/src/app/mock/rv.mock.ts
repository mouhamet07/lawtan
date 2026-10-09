import { Rv } from "@features/private/models/rv.model";

export const MOCK_RV: Rv[] = [
    { 
        id: 1, 
        date: '2026-02-15', 
        heure: '14:30', 
        specialite: 'Cardiologie', 
        type: 'Consultation', 
        statut: 'À venir', 
        motif: 'Contrôle tension artérielle', 
        medecin: 'Dr. Martin Pierre' 
    },
    { 
        id: 2, 
        date: '2026-02-20', 
        heure: '10:00', 
        specialite: 'Généraliste', 
        type: 'Consultation', 
        statut: 'À venir', 
        motif: 'Consultation générale annuelle', 
        medecin: 'Dr. Dupont Marie' 
    },
    { 
        id: 3,
        date: '2026-02-25', 
        heure: '16:00', 
        specialite: 'Dermatologie', 
        type: 'Prestation', 
        statut: 'À venir', 
        motif: 'Analyse dermatologique', 
        medecin: 'Dr. Bernard Sophie' 
    },
    { 
        id: 4, 
        date: '2025-01-05', 
        heure: '11:00', 
        specialite: 'Généraliste',
        type: 'Consultation', 
        statut: 'Passé', 
        motif: 'Consultation de suivi', 
        medecin: 'Dr. Laurent Jean' 
    },
    { 
        id: 5, 
        date: '2025-02-18', 
        heure: '15:30', 
        specialite: 'Neurologie', 
        type: 'Consultation', 
        statut: 'Passé', 
        motif: 'Troubles de la vision', 
        medecin: 'Dr. Ndiaye Fatou' 
    },
    { 
        id: 6, 
        date: '2025-03-10', 
        heure: '09:00', 
        specialite: 'Radiologie', 
        type: 'Prestation', 
        statut: 'Passé', 
        motif: 'Radiographie thoracique', 
        medecin: 'Dr. Diallo Amadou' 
    },
    { 
        id: 7, 
        date: '2025-04-22', 
        heure: '13:45', 
        specialite: 'ORL', 
        type: 'Consultation', 
        statut: 'Passé', 
        motif: 'Douleurs auriculaires', 
        medecin: 'Dr. Sarr Awa' 
    },
    { 
        id: 8, 
        date: '2025-06-02', 
        heure: '08:30', 
        specialite: 'Ophtalmologie', 
        type: 'Prestation', 
        statut: 'Passé', 
        motif: 'Contrôle de la vue', 
        medecin: 'Dr. Moreau Luc' 
    },
    { 
        id: 9, 
        date: '2025-07-14', 
        heure: '10:15', 
        specialite: 'Pédiatrie', 
        type: 'Consultation', 
        statut: 'Passé', 
        motif: 'Vaccination', 
        medecin: 'Dr. Ba Cheikh' 
    },
    { 
        id: 10, 
        date: '2025-09-05', 
        heure: '16:20', 
        specialite: 'Gynécologie', 
        type: 'Consultation', 
        statut: 'Passé', 
        motif: 'Suivi gynécologique', 
        medecin: 'Dr. Fall Khady' 
    }
];
