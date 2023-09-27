import { NgModule } from '@angular/core';
import { LandingRoutingModule } from './landing.routing';
import { HomePage } from './pages/home/home.page';
import { SignupPage } from './pages/signup/signup.page';
import { ComponentsModule } from '@app/shared/components/components.module';

@NgModule({
  declarations: [HomePage, SignupPage],
  imports: [LandingRoutingModule,
            ComponentsModule],
  providers: [],
})
export class LandingModule {}
