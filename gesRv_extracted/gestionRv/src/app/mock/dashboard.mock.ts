import { DashboardStats } from "@features/private/models/dashboard.model";

export const MOCK_DASH :DashboardStats = {
    rvConfirmes: 4,
    rvEnAttentes: 2,
    rvRejetes: 1,
    nbrConsultations: 5,

    rendezVous: [
        {
            id: 1,
            date: '2024-07-01',
            heure: '09:00',
            specialite: 'Cardiologie',
            type: 'Consultation',
            statut: 'Passé',
            motif: 'Contrôle tension',
            medecin: 'Dr. Martin Pierre'
        },
        {
            id: 2,
            date: '2024-07-02',
            heure: '11:30',
            specialite: 'Dermatologie',
            type: 'Consultation',
            statut: 'Passé',
            motif: 'Allergie cutanée',
            medecin: 'Dr. Sow Aminata'
        },
        {
            id: 3,
            date: '2024-07-03',
            heure: '14:00',
            specialite: 'Neurologie',
            type: 'Consultation',
            statut: 'À venir',
            motif: 'Migraines',
            medecin: 'Dr. Ndiaye Fatou'
        },
        {
            id: 4,
            date: '2024-07-04',
            heure: '10:15',
            specialite: 'Pédiatrie',
            type: 'Prestation',
            statut: 'À venir',
            motif: 'Vaccination enfant',
            medecin: 'Dr. Laurent Jean'
        },
        {
            id: 5,
            date: '2024-07-05',
            heure: '16:30',
            specialite: 'Radiologie',
            type: 'Prestation',
            statut: 'À venir',
            motif: 'IRM cérébrale',
            medecin: 'Dr. Dupont Marie'
        }
    ]
}
