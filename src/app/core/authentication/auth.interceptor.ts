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
    const refreshToken = localStorage.getItem('refresh_token');
    const accessTokenEstaExpirado = this.jwtHelper.isTokenExpired(accessToken);

    if (this.accessTokenInvalido(accessToken)) {
      this.redirecionaSiteInstitucional();
    }

    if (
      this.refreshTokenInvalido(
        refreshToken,
        accessTokenEstaExpirado,
      )
    ) {
      this.redirecionaSiteInstitucional();
    }

    if (accessTokenEstaExpirado) {
      return this.authService
        .atualizaAutenticacao("" + accessToken,"" + refreshToken)
        .pipe(
          first(),
          mergeMap((response: any) => {
            localStorage.setItem('access_token', response.token);
            localStorage.setItem('refresh_token',response.refreshToken);
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
    accessTokenEstaExpirado: boolean
  ): boolean {
    if (
      (!refreshToken && accessTokenEstaExpirado)
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
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    let bearerToken = isNullOrUndefined(accessToken)
      ? ''
      : accessToken;

    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  }
}
