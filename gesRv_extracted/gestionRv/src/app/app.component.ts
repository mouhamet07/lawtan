import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router, NavigationStart, NavigationEnd, ResolveStart, ResolveEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestionRv';
  loading = false;

  constructor(private router: Router) {}

  ngOnInit() {

    this.router.events.subscribe(event => {

      if (event instanceof NavigationStart || event instanceof ResolveStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd || event instanceof ResolveEnd) {
        this.loading = false;
      }

    });

  }
}
