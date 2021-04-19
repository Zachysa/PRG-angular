import { Component } from '@angular/core';
import {AuthService} from './service/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PRG-angular';

  public constructor(private service: AuthService) {
  }

  public Logout(): void{
this.service.Logout();
  }
}
