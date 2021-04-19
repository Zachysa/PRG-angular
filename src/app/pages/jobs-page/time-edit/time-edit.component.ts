import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackUpConfig} from '../../../models/BackUpConfig';
import {ActivatedRoute, Router} from '@angular/router';
import {BackUpConfigServiceService} from '../../../service/back-up-config-service.service';
import {tap} from 'rxjs/operators';
import {NewConfigComponent} from '../../../component/new-config/new-config.component';
import {Time} from '../../../models/Time';
import {TimeFormComponent} from '../../../component/time-form/time-form.component';
import {TimeService} from '../../../service/time-service';

@Component({
  selector: 'app-time-edit',
  templateUrl: './time-edit.component.html',
  styleUrls: ['./time-edit.component.scss']
})
export class TimeEditComponent implements OnInit {

  public form: FormGroup;

  public time: Observable<Time>;
  config: Observable<BackUpConfig[]>;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: TimeService,
              private router: Router,
              private service2: BackUpConfigServiceService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.time = this.service.findbyId(id).pipe(
      tap(time => this.form = TimeFormComponent.createformtime(this.fb, time))
    );
    this.config = this.service2.findall();
  }



  save(time: Time): void {

    this.service.save(Object.assign(time, this.form.value)).subscribe();
    this.router.navigate(['/jobs']);
  }
}
