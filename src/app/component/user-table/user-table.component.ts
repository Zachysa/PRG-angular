import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/Users';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {

  constructor() { }

  @Input()
  users: User[]

  ngOnInit(): void {
  }

}
