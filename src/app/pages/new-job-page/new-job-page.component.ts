import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup} from '@angular/forms';
import {PcService} from '../../service/pc-service';
import {Router} from '@angular/router';
import {BackUpConfigServiceService} from '../../service/back-up-config-service.service';
import {TimeService} from '../../service/time-service';
import {StorageService} from '../../service/storage-service';
import {Time} from '../../models/Time';
import {NewConfigComponent} from '../../component/new-config/new-config.component';
import {BackUpConfig} from '../../models/BackUpConfig';
import {Storage} from '../../models/Storage';
import {TimeFormComponent} from '../../component/time-form/time-form.component';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-new-job-page',
  templateUrl: './new-job-page.component.html',
  styleUrls: ['./new-job-page.component.scss']
})
export class NewJobPageComponent implements OnInit {

  public form: FormGroup;
  Config: Observable<BackUpConfig[]>;

  constructor(private fb: FormBuilder,
              private service: BackUpConfigServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = NewConfigComponent.createform(this.fb ,new BackUpConfig());
    }

  save(): void {

    this.service.save(this.form.value).subscribe();
    this.router.navigate(['/jobs']);
  }

  delete(config: BackUpConfig): void {
    this.Config = this.service.delete(config).pipe(
      switchMap(() => this.service.findall())
    );
  }

}
