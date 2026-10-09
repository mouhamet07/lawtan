import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Inject } from '@angular/core';
import { DossierMedicalInterfaceService, DOSSIER_MEDICAL_SERVICE } from '@features/private/index';
import { Patient } from '@features/private/models/dossier.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dossier-medical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.css']
})
export class DossierMedicalComponent implements OnInit {
  title = 'Mon Dossier Médical';
  patient$!: Observable<Patient>;
  activeTab = 'maladies';
  constructor(@Inject(DOSSIER_MEDICAL_SERVICE) private dossierMedicalService: DossierMedicalInterfaceService) {}
  ngOnInit(): void {
    this.patient$ = this.dossierMedicalService.getDossier();
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
  getMedicamentsString(medicaments: { nom: string, dosage: string }[]): string {
    return medicaments.map(m => `${m.nom} ${m.dosage}`).join(', ');
  }
}
