import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandeFiltre, DemandeListeReponse } from '@features/private/models/demandes.model';
import { Inject } from '@angular/core';
import { DemandeInterfaceService, DEMANDE_SERVICE } from '@features/private/index';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { PaginationComponent } from '@shared/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-demande',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PaginationComponent],
  templateUrl: './list-demande.component.html',
  styleUrl: './list-demande.component.css',
  /*
  detectionn de changement OnPush pour optimiser les performances
  si on a les donnees dans le composant et non centralise
  dans un service ou store
  */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListDemandeComponent implements OnInit, OnDestroy {
  demandeResponse$!: Observable<DemandeListeReponse>;
  filtre: DemandeFiltre = {
    specialite: '',
    statut: 'En Attente',
  }

  constructor(
    private route: ActivatedRoute,
    @Inject(DEMANDE_SERVICE) private demandeService: DemandeInterfaceService
  ) {}
  ngOnInit(): void {
    this.loadDemandes();
  }
  ngOnDestroy(): void {
    alert('ListDemandeComponent destroyed');
  }
  private loadDemandes(): void {
    this.demandeResponse$ = this.route.data.pipe(
      map(data => data['demandes'])
    );
  }
  onFiltrerChange():void {
    this.filtre.page = 1;
    this.loadDemandes();
  }
  onPaginate(page: number): void {
    this.filtre.page = page;
    this.loadDemandes();
  }
}
