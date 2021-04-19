import { Component, OnInit } from '@angular/core';
import {NewConfigComponent} from '../../../component/new-config/new-config.component';
import {BackUpConfig} from '../../../models/BackUpConfig';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackUpConfigServiceService} from '../../../service/back-up-config-service.service';
import {Router} from '@angular/router';
import {StorageService} from '../../../service/storage-service';
import {TimePageComponent} from '../time-page/time-page.component';
import {Time} from '../../../models/Time';
import {Storage} from '../../../models/Storage';
import {StorageFormComponent} from '../../../component/storage-form/storage-form.component';
import {Observable} from 'rxjs';
import {TimeService} from '../../../service/time-service';

@Component({
  selector: 'app-storage-page',
  templateUrl: './storage-page.component.html',
  styleUrls: ['./storage-page.component.scss']
})
export class StoragePageComponent implements OnInit {

  config: Observable<BackUpConfig[]>;
  time: Observable<Time[]>;
  storage: Observable<Storage[]>;

  public form: FormGroup;

  constructor(private fb: FormBuilder,
              private service: StorageService,
              private router: Router,
              private service2: BackUpConfigServiceService,
              private service3: TimeService,) { }

  ngOnInit(): void {
    this.form = StorageFormComponent.createformstorage(this.fb, new Storage())
    this.config = this.service2.findall();
    this.time = this.service3.findall();
    this.storage = this.service.findall();
  }
  save(): void {

    this.service.save(this.form.value).subscribe();
    this.router.navigate(['/jobs']);
  }
}
