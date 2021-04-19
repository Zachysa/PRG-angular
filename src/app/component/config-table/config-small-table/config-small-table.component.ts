import {Component, Input, OnInit} from '@angular/core';
import {BackUpConfig} from '../../../models/BackUpConfig';

@Component({
  selector: 'app-config-small-table',
  templateUrl: './config-small-table.component.html',
  styleUrls: ['./config-small-table.component.scss']
})
export class ConfigSmallTableComponent implements OnInit {

  constructor() { }
  @Input()
  config: BackUpConfig[];


  ngOnInit(): void {
  }

}
