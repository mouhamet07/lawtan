import { Component, Inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { detailsRv } from '@features/private/models/details.model';
import { RV_SERVICE, RvInterfaceService } from '@features/private/index';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details-rv',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './details-rv.component.html',
  styleUrl: './details-rv.component.css'
})
export class DetailsRvComponent implements OnInit{
  title: string = 'Détails du rendez-vous';
  details$!: Observable<detailsRv>;
  constructor(@Inject(RV_SERVICE) private rvService: RvInterfaceService) {}
  ngOnInit(): void {
    this.details$ = this.rvService.getDetailsRv();
  }
}
