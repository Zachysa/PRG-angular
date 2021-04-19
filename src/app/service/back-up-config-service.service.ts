import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Pc} from '../models/Pc';
import {shareReplay} from 'rxjs/operators';
import {BackUpConfig} from '../models/BackUpConfig';

@Injectable({
  providedIn: 'root'
})
export class BackUpConfigServiceService {

  constructor(private client: HttpClient,
              private router: Router) { }

  public findall(): Observable<BackUpConfig[]>
  {
    return this.client.get<BackUpConfig[]>('https://localhost:44358/api/BackUpConfig').pipe(
      shareReplay()
    );
  }

  public findbyId(id: number): Observable<BackUpConfig>{
    return this.client.get<BackUpConfig>('https://localhost:44358/api/BackUpConfig/' + id).pipe(
      shareReplay()
    );
  }

  public delete(config: BackUpConfig): Observable<BackUpConfig>{
    return this.client.delete<BackUpConfig>('https://localhost:44358/api/BackUpConfig/' + config.id);
  }

    public save(config: BackUpConfig): Observable<BackUpConfig>{
    if (config.id) {
      return this.client.put<BackUpConfig>('https://localhost:44358/api/BackUpConfig/' + config.id, config);
    }
    else {
      return this.client.post<BackUpConfig>('https://localhost:44358/api/BackUpConfig', config);
    }
  }
}
