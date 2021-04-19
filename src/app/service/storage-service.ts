import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {Storage} from '../models/Storage';

@Injectable()
export class StorageService
{
  constructor(private client: HttpClient,
              private router: Router) {
  }

  public findall(): Observable<Storage[]>
  {
    return this.client.get<Storage[]>('https://localhost:44358/api/storage').pipe(
      shareReplay()
    );
  }

  public findbyId(id: number): Observable<Storage>{
    return this.client.get<Storage>('https://localhost:44358/api/storage/' + id).pipe(
      shareReplay()
    );
  }

  public delete(storage: Storage): Observable<Storage>{
    return this.client.delete<Storage>('https://localhost:44358/api/storage/' + storage.id);
  }

  public save(storage: Storage): Observable<Storage>{
    if (storage.id) {
      return this.client.put<Storage>('https://localhost:44358/api/storage/' + storage.id, storage);
    }
    else {
      return this.client.post<Storage>('https://localhost:44358/api/storage', storage);
    }
  }
}
