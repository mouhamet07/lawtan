type UserRole = 'PATIENT' | 'MEDECIN' | 'ADMIN' |'SECRETAIRE';
export interface User {
    id: number;
    email: string;
    role: UserRole;
    password: string;
    nomComplet: string;
}
export interface UserLoginReponse {
    user: User;
    token?: string;
}
export interface UserLoginRequest {
    email: string;
    password: string;
}