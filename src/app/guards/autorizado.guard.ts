import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../services/autorizacao.service';


@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate {
  constructor(
    private autorizadoService: AutorizacaoService,
    private routerService: Router
    ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();
    if (usuarioEstaLogado)
       return true;
    this.routerService.navigate(["/login"]);  
    return false;
  }
  
}
