import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Pc} from '../models/Pc';
import {shareReplay} from 'rxjs/operators';
import {Router} from '@angular/router';
import {User} from '../models/Users';

@Injectable()
export class PcService
{
  constructor(private client: HttpClient,
              private router: Router) {
  }

  public findall(): Observable<Pc[]>
  {
    return this.client.get<Pc[]>('https://localhost:44358/api/Pc').pipe(
      shareReplay()
    );
  }

  public findbyId(id: number): Observable<Pc>{
    return this.client.get<Pc>('https://localhost:44358/api/Pc/' + id).pipe(
      shareReplay()
    );
  }

  public delete(pc: Pc): Observable<Pc>{
    return this.client.delete<Pc>('https://localhost:44358/api/Pc/' + pc.id);
  }

  public save(pc: Pc): Observable<Pc>{
    if (pc.id) {
      return this.client.put<Pc>('https://localhost:44358/api/Pc/' + pc.id, pc);
    }
    else {
      return this.client.post<Pc>('https://localhost:44358/api/Pc', pc);
    }
  }
}

