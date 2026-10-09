import { Component, Inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserLoginReponse } from '@core/models/user.model';
import { SECURITY_SERVICE, SecurityInterfaceService } from '@core/services/interfaces/security.interface.service';

@Component({
  selector: 'app-header-private',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header-private.component.html',
  styleUrl: './header-private.component.css'
})
export class HeaderPrivateComponent {
  public currentUser!:UserLoginReponse
  constructor(@Inject(SECURITY_SERVICE) private securityService: SecurityInterfaceService,
    private router: Router
  ) { }
  ngOnInit(): void{
    this.currentUser=this.securityService.getCurrentUser()!
  }
  logout() {
    this.securityService.logout();
    this.router.navigate(['/public/login']);
  }
}
