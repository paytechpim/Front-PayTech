import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@app/core/authentication/auth.service';

@Component({
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent {

  @ViewChild(MatDrawer)
  drawer!: MatDrawer;

  opened = true;
  
  constructor(
    private authService: AuthService, 
    private router: Router,
    private observer: BreakpointObserver) { 
 
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if(res.matches){
        this.drawer.mode = 'over';
        this.drawer.close();
      }else{
        this.drawer.mode = 'side'
        this.drawer.open();
      }
    });
  }

  toggle() {
    this.opened = !this.opened;
  }

  sair(){
    this.authService.sair();
  }
}
