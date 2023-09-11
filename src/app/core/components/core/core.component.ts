import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/authentication/auth.service';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {
  opened = true;
  
  constructor(private authService: AuthService, private router: Router) { }

  toggle() {
    this.opened = !this.opened;
  }

  sair(){
    this.authService.sair();
  }
}
