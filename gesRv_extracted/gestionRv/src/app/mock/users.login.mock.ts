import { User } from "@core/models/user.model";

export const MOCK_USERS: User[] = [
    {
        id: 1,
        email: 'admin@example.com',
        role: 'ADMIN',
        password: 'admin123',
        nomComplet: 'Admin User'
    },
    {
        id: 2,
        email: 'medecin@example.com',
        role: 'MEDECIN',
        password: 'medecin123',
        nomComplet: 'Dr. Martin Pierre'
    },
    {
        id: 3,
        email: 'patient@example.com',
        role: 'PATIENT',
        password: 'patient123',
        nomComplet: 'Jean Dupont'
    },
    {
        id: 4,
        email: 'secretaire@example.com',
        role: 'SECRETAIRE',
        password: 'secretaire123',
        nomComplet: 'Marie Dubois'
    }
];