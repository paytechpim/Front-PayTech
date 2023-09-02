import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardPageComponent } from './pages/dashboard.page';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [CommonModule, DashboardRoutingModule],
  providers: [],
})
export class DashboardModule {}
