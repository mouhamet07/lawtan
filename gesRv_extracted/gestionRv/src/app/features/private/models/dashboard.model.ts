import { Rv } from "@features/private/models";

export interface DashboardStats {
    rvConfirmes: number;
    rvEnAttentes: number;
    rvRejetes: number;
    nbrConsultations: number;
    rendezVous: Rv[];
}
