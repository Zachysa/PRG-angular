import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {BackUpConfig} from '../../models/BackUpConfig';
import {BackUpConfigServiceService} from '../../service/back-up-config-service.service';
import {Time} from '../../models/Time';
import {TimeService} from '../../service/time-service';
import {StorageService} from '../../service/storage-service';
import {Storage} from '../../models/Storage';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-jobs-page',
  templateUrl: './jobs-page.component.html',
  styleUrls: ['./jobs-page.component.scss']
})
export class JobsPageComponent implements OnInit {

  config: Observable<BackUpConfig[]>;
  time: Observable<Time[]>;
  storage: Observable<Storage[]>;


  constructor(private service: BackUpConfigServiceService,
              private service2: TimeService,
              private service3: StorageService
              ) { }

  ngOnInit(): void {
    this.config = this.service.findall();
    this.time = this.service2.findall();
    this.storage = this.service3.findall();


      }
  deleteConfig(config: BackUpConfig): void {
    this.config = this.service.delete(config).pipe(
      switchMap(() => this.service.findall())
    );
  }

  deleteTime(time: Time): void {
    this.time = this.service2.delete(time).pipe(
      switchMap(() => this.service2.findall())
    );
  }

  deleteStorage(storage: Storage): void {
    this.storage = this.service3.delete(storage).pipe(
      switchMap(() => this.service3.findall())
    );
  }

}

