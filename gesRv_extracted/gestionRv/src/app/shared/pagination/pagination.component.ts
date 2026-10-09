import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PaginationResponse {
  pages: number[];
  currentPage: number;
  totalPages: number;
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() response!: PaginationResponse | null;
  @Output() pageChange = new EventEmitter<number>();

  desactivePrecedent(): boolean {
    return !(this.response && this.response.currentPage > 1);
  }

  desactiveSuivant(): boolean {
    return !(this.response && this.response.currentPage < this.response.pages.length);
  }

  onPaginate(page: number): void {
    if (this.response) {
      if (page >= 1 && page <= this.response.pages.length) {
        this.pageChange.emit(page);
      }
    }
  }
}
