import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {BackUpConfig} from '../../models/BackUpConfig';
import {Time} from '../../models/Time';
import {Storage} from '../../models/Storage';

@Component({
  selector: 'app-config-table',
  templateUrl: './config-table.component.html',
  styleUrls: ['./config-table.component.scss']
})
export class ConfigTableComponent implements OnInit {

  constructor() { }
  @Input()
  config: BackUpConfig[];

  @Input()
  time: Time[];

  @Input()
  storage: Storage[];

  @Output()
  deleteC: EventEmitter<BackUpConfig> = new EventEmitter<BackUpConfig>();

  @Output()
  deleteT: EventEmitter<Time> = new EventEmitter<Time>();

  @Output()
  deleteS: EventEmitter<Storage> = new EventEmitter<Storage>();

  deleteConfig(config: BackUpConfig): void {
    this.deleteC.emit(config);
  }

  deleteTime(time: Time): void {
    this.deleteT.emit(time);
  }

  deleteStorage(storage: Storage): void {
    this.deleteS.emit(storage);
  }


  ngOnInit(): void {
  }

}
