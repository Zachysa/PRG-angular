import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';
import {User} from '../models/Users';

@Injectable()
export class UserService
{
  constructor(private client: HttpClient,
              private router: Router) {
  }

  public findall(): Observable<User[]>
  {
    return this.client.get<User[]>('https://localhost:44358/api/user').pipe(
      shareReplay()
    );
  }

  public findbyId(id: number): Observable<User>{
    return this.client.get<User>('https://localhost:44358/api/user/' + id).pipe(
      shareReplay()
    );
  }

  public delete(user: User): Observable<User>{
    return this.client.delete<User>('https://localhost:44358/api/user/' + user.id);
  }

  public save(user: User): Observable<User>{
    if (user.id) {
      return this.client.put<User>('https://localhost:44358/api/user/' + user.id, user);
    }
    else {
      return this.client.post<User>('https://localhost:44358/api/user', user);
    }
  }
}
