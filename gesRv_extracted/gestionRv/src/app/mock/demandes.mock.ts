import { DemandeInterface } from "@features/private/models/demandes.model";

export const MOCK_DEMANDES: DemandeInterface[] = [
    {
        id: 1,
        date: '2024-07-01',
        heure: '10:00',
        specialite: 'Cardiologie',
        type: 'Consultation',
        motif: 'Douleurs thoraciques',
        statut: 'En Attente'
    },
    {
        id: 2,
        date: '2024-07-02',
        heure: '11:30',
        specialite: 'Dermatologie',
        type: 'Consultation',
        motif: 'Allergie cutanée',
        statut: 'Acceptée'
    },
    {
        id: 3,
        date: '2024-07-03',
        heure: '14:15',
        specialite: 'Neurologie',
        type: 'Consultation',
        motif: 'Migraines fréquentes',
        statut: 'Rejetée'
    },
    {
        id: 4,
        date: '2024-07-04',
        heure: '09:00',
        specialite: 'Pédiatrie',
        type: 'Prestation',
        motif: 'Vaccination enfant',
        statut: 'Acceptée'
    },
    {
        id: 5,
        date: '2024-07-05',
        heure: '16:45',
        specialite: 'Radiologie',
        type: 'Prestation',
        motif: 'IRM cérébrale',
        statut: 'En Attente'
    },
    {
        id: 6,
        date: '2024-07-06',
        heure: '08:30',
        specialite: 'Cardiologie',
        type: 'Consultation',
        motif: 'Contrôle tension',
        statut: 'Acceptée'
    },
    {
        id: 7,
        date: '2024-07-07',
        heure: '13:00',
        specialite: 'Dermatologie',
        type: 'Prestation',
        motif: 'Analyse dermatologique',
        statut: 'En Attente'
    }
]
