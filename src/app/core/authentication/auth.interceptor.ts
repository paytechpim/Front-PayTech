import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, throwError } from 'rxjs';
import { catchError, first, mergeMap } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private jwtHelper: JwtHelperService;

  constructor(private authService: AuthService) {
    this.jwtHelper = new JwtHelperService();
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('conf_gestao_refresh_token');
    const accessTokenEstaExpirado = this.jwtHelper.isTokenExpired(accessToken);
    const refreshTokenEstaExpirado =
      this.jwtHelper.isTokenExpired(refreshToken);

    if (this.accessTokenInvalido(accessToken)) {
      this.redirecionaSiteInstitucional();
    }

    if (
      this.refreshTokenInvalido(
        refreshToken,
        accessTokenEstaExpirado,
        refreshTokenEstaExpirado
      )
    ) {
      this.redirecionaSiteInstitucional();
    }

    if (accessTokenEstaExpirado) {
      return this.authService
        .atualizaAutenticacao(refreshToken, accessToken)
        .pipe(
          first(),
          mergeMap((response) => {
            localStorage.setItem('access_token', response['access_token']);
            localStorage.setItem(
              'conf_gestao_refresh_token',
              response['refresh_token']
            );
            req = this.montaRequest(req);
            return next.handle(req);
          }),
          catchError((err) => {
            this.redirecionaSiteInstitucional();
            return throwError(err);
          })
        );
    } else {
      req = this.montaRequest(req);
      return next.handle(req);
    }
  }

  private accessTokenInvalido(accessToken?: string | null): boolean {
    if (!accessToken) {
      return true;
    }
    return false;
  }

  private refreshTokenInvalido(
    refreshToken: string | null,
    refreshTokenEstaExpirado: boolean,
    accessTokenEstaExpirado: boolean
  ): boolean {
    if (
      (!refreshToken && accessTokenEstaExpirado) ||
      (refreshTokenEstaExpirado && accessTokenEstaExpirado)
    ) {
      return true;
    }
    return false;
  }

  private redirecionaSiteInstitucional() {
    this.authService.redirecionaSiteInstitucional();
  }

  private montaRequest(request: HttpRequest<any>) {
    let req = request.clone({
      setHeaders: {
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
        Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
      },
    });

    req = this.adicionarTokenAoHeader(req);
    return req;
  }

  private adicionarTokenAoHeader(request: HttpRequest<any>) {
    let bearerToken = isNullOrUndefined(localStorage.access_token)
      ? ''
      : localStorage.access_token;

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}
