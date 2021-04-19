import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../models/Users';
import {UserService} from '../../service/User-service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  User : Observable<User[]>;

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.User = this.service.findall();
  }

}
