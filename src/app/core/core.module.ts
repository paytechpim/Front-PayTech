import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MenubarModule } from '@app/modules/menubar/menubar.module';
import { JwtModule } from '@auth0/angular-jwt';
import { provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { AuthGuard } from './authentication/auth.guard';
import { AuthService } from './authentication/auth.service';
import { CoreComponent } from './components/core/core.component';

// TODO: pegar de auth folder
export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MenubarModule,
    RouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['example.com'],
        disallowedRoutes: ['http://example.com/examplebadroute/'],
      },
    }),
  ],
  exports: [CoreComponent],
  providers: [
    AuthService,
    AuthGuard,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    provideNgxMask(),
    provideEnvironmentNgxMask({ validation: false }),
  ],
})
export class CoreModule {}
