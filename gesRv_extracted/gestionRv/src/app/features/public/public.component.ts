import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPublicComponent } from '@layouts/public/header-public/header-public.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet,HeaderPublicComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.css'
})
export class PublicComponent {

}
