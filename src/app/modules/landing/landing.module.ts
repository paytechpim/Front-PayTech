import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing.routing';
import { HomePage } from './pages/home/home.page';
import { SignupPage } from './pages/signup/signup.page';
import { ComponentsModule } from '@app/shared/components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomePage, SignupPage],
  imports: [LandingRoutingModule,
            ComponentsModule,
            CommonModule],
  providers: [],
})
export class LandingModule {}
