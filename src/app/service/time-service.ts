import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Time} from '../models/Time';

@Injectable()
export class TimeService
{
  constructor(private client: HttpClient,
              private router: Router) {
  }

  public findall(): Observable<Time[]>
  {
    return this.client.get<Time[]>('https://localhost:44358/api/time').pipe(
      shareReplay()
    );
  }

  public findbyId(id: number): Observable<Time>{
    return this.client.get<Time>('https://localhost:44358/api/time/' + id).pipe(
      shareReplay()
    );
  }

  public delete(time: Time): Observable<Time>{
    return this.client.delete<Time>('https://localhost:44358/api/time/' + time.id);
  }

  public save(time: Time): Observable<Time>{
    if (time.id) {
      return this.client.put<Time>('https://localhost:44358/api/time/' + time.id, time);
    }
    else {
      return this.client.post<Time>('https://localhost:44358/api/time', time);
    }
  }
}
