import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {Time} from '../../../models/Time';
import {ActivatedRoute, Router} from '@angular/router';
import {TimeService} from '../../../service/time-service';
import {tap} from 'rxjs/operators';
import {TimeFormComponent} from '../../../component/time-form/time-form.component';
import {StorageService} from '../../../service/storage-service';
import {StorageFormComponent} from '../../../component/storage-form/storage-form.component';
import {Storage} from '../../../models/Storage';

@Component({
  selector: 'app-storage-edit',
  templateUrl: './storage-edit.component.html',
  styleUrls: ['./storage-edit.component.scss']
})
export class StorageEditComponent implements OnInit {

  public form: FormGroup;

  public storage: Observable<Storage>;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: StorageService,
              private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storage = this.service.findbyId(id).pipe(
      tap(storage => this.form = StorageFormComponent.createformstorage(this.fb, storage))
    );
  }



  save(storage: Storage): void {

    this.service.save(Object.assign(storage, this.form.value)).subscribe();
    this.router.navigate(['/jobs']);
  }
}
