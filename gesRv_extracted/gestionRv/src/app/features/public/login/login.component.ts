import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SecurityService } from '@core/services/security.service';
import { UserLoginRequest } from '@core/models/user.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SECURITY_SERVICE, SecurityInterfaceService } from '@core/services/interfaces/security.interface.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userLogin:UserLoginRequest = {
    email: '',
    password: ''
  };
  errorMessage: string = '';
  constructor(@Inject(SECURITY_SERVICE) private securityService: SecurityInterfaceService,
    private router: Router
  ) { }
  onLogin(formCtrl: NgForm): void {
    if (formCtrl.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }
    this.securityService.login(this.userLogin).subscribe({
      next: (response) => {
        console.log('Connexion réussie:', response);
        this.router.navigate(['/gestion-rv/dash']);
      },
      error: (err) => {
        console.error('Erreur login:', err);
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    });
  }
  isFieldInvalid(fieldname: string, formCtrl: NgForm): boolean {
    const field = formCtrl?.controls[fieldname];
    return !!(field && field.invalid && (field.touched || field.dirty));
  }
}
