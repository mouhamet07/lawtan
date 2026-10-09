import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardStats } from '@features/private/models/dashboard.model';
import { Rv } from '@features/private/models/rv.model';
import { Observable } from 'rxjs';
import { Inject } from '@angular/core';
import { DashboardInterfaceService, DASHBOARD_SERVICE } from '@features/private/index';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  title: string = 'Tableau de bord';

  stats$!: Observable<DashboardStats>;
  rvAvenir$!: Observable<Rv[]>;

  constructor(@Inject(DASHBOARD_SERVICE) private dashboardService: DashboardInterfaceService) {}

  ngOnInit(): void {
    this.stats$ = this.dashboardService.getDashboardData();
    this.rvAvenir$ = this.dashboardService.rvAvenir();
  }
}
