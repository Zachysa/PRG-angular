import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {PcService} from '../../../service/pc-service';
import {tap} from 'rxjs/operators';
import {PcFormComponent} from '../../../component/pc-form/pc-form.component';
import {BackUpConfig} from '../../../models/BackUpConfig';
import {BackUpConfigServiceService} from '../../../service/back-up-config-service.service';
import {NewConfigComponent} from '../../../component/new-config/new-config.component';

@Component({
  selector: 'app-job-edit',
  templateUrl: './job-edit.component.html',
  styleUrls: ['./job-edit.component.scss']
})
export class JobEditComponent implements OnInit {

  public form: FormGroup;

  public config: Observable<BackUpConfig>;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: BackUpConfigServiceService,
              private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.config = this.service.findbyId(id).pipe(
      tap(config => this.form = NewConfigComponent.createform(this.fb, config))
    );
  }



  save(config: BackUpConfig): void {

    this.service.save(Object.assign(config, this.form.value)).subscribe();
    this.router.navigate(['/jobs']);
  }

}
