import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

interface Server { id: number, name: string, status: string }

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<Server> {

  // constructor(private routingServerService: RoutingServerService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return 
  }
}
