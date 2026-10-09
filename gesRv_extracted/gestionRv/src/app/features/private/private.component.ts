import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderPrivateComponent } from '@layouts/private/header-private/header-private.component';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [RouterOutlet, HeaderPrivateComponent],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {

}
