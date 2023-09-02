import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private modulos: Array<string>;

  constructor(private _router: Router, private authService: AuthService) {
    this.modulos = new Array<string>();
    this.modulos.push('cadastroGestor');
    this.modulos.push('cadastroGrupoPrestador');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.estaAutenticado() == false) {
      this._router.navigate(['/login']);
      return false;
    }

    return true;
  }

  private permiteAcessarModulo(caminhoModulo: string) {
    if (
      caminhoModulo == 'cadastro-gestor' &&
      this.modulos[0] == this.authService.recuperaModulo()
    ) {
      return true;
    }
    if (
      caminhoModulo == 'grupo-prestador' &&
      this.modulos[1] == this.authService.recuperaModulo()
    ) {
      return true;
    }
    return false;
  }

  private estaAutenticado() {
    return true;

    // TODO: remover esse comentário
    // if (this.authService.autenticado()) {
    //   return true;
    // }
    // return false;
  }
}
