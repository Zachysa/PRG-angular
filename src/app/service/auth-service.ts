import {Injectable, Input} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../models/Users';
import {PcService} from './pc-service';
import {UserService} from './User-service';




@Injectable({providedIn: 'root'})
export class AuthService {

  User: Observable<User[]>;

  @Input()
  User2: User[];

  private logg: boolean;

user: Observable<User>;
  constructor(private service: PcService, private service2: UserService) {
    this.logg = localStorage.getItem('log') === 'true';
  }

  public Login(credentials: {login: string, password: string}): Observable<boolean>{
    this.User = this.service2.findall();

    const result = credentials.login === 'admin' && credentials.password === 'admin';
    localStorage.setItem('log', result.toString());
    this.logg = result;
    return of(result);

  }

  public Logout(): void {
    this.logg = false;
    localStorage.removeItem('log');
  }
  public isAuth(): boolean {
    return this.logg;
  }
}
