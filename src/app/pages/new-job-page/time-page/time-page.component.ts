import { Component, OnInit } from '@angular/core';
import {NewConfigComponent} from '../../../component/new-config/new-config.component';
import {BackUpConfig} from '../../../models/BackUpConfig';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackUpConfigServiceService} from '../../../service/back-up-config-service.service';
import {Router} from '@angular/router';
import {TimeService} from '../../../service/time-service';
import {TimeFormComponent} from '../../../component/time-form/time-form.component';
import {Time} from '../../../models/Time';
import {Observable} from 'rxjs';
import {Storage} from '../../../models/Storage';
import {StorageService} from '../../../service/storage-service';

@Component({
  selector: 'app-time-page',
  templateUrl: './time-page.component.html',
  styleUrls: ['./time-page.component.scss']
})
export class TimePageComponent implements OnInit {

  public form: FormGroup;
  config: Observable<BackUpConfig[]>;
  time: Observable<Time[]>;
  storage: Observable<Storage[]>;


  constructor(private fb: FormBuilder,
              private service: TimeService,
              private service2: BackUpConfigServiceService,
              private service3: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = TimeFormComponent.createformtime(this.fb, new Time())
    this.config = this.service2.findall();
    this.time = this.service.findall();
    this.storage = this.service3.findall();
  }
  save(): void {

    this.service.save(this.form.value).subscribe();
    this.router.navigate(['/jobs']);
  }

}
