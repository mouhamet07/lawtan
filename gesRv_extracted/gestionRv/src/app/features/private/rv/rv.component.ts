import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Rv, RvFiltre, RvListeReponse } from '@features/private/models/rv.model';
import { Inject } from '@angular/core';
import { RvInterfaceService, RV_SERVICE } from '@features/private/index';
import { Observable } from 'rxjs';
import { PaginationComponent } from '@shared/pagination/pagination.component';

@Component({
  selector: 'app-rv',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule, PaginationComponent],
  templateUrl: './rv.component.html',
  styleUrls: ['./rv.component.css']
})
export class RvComponent implements OnInit {
  title: string = 'Mes Rendez-vous';
  rvAvenir$!: Observable<Rv[]>;
  rvPasse$!: Observable<RvListeReponse>;
  filtre: RvFiltre = { statut: '' };
  constructor(@Inject(RV_SERVICE) private rvService: RvInterfaceService) {}
  ngOnInit(): void {
    this.loadRv();
  }
  private loadRv(): void {
    this.rvAvenir$ = this.rvService.rvAvenir();
    this.rvPasse$  = this.rvService.rvPasse(this.filtre);
  }
  onFiltreStatutChange(): void {
    this.filtre.page = 1;
    if (this.filtre.statut === 'À venir') {
      this.rvAvenir$ = this.rvService.rvAvenir();
    }
    else if (this.filtre.statut === 'Passé') {
      this.rvPasse$ = this.rvService.rvPasse(this.filtre);
    }
    else {
      this.loadRv();
    }
  }
  onPaginate(page: number): void {
    this.filtre.page = page;
    this.rvPasse$ = this.rvService.rvPasse(this.filtre);
  }
}
