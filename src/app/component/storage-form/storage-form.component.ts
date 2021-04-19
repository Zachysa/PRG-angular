import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackUpConfig} from '../../models/BackUpConfig';
import {Time} from '../../models/Time';
import {Storage} from '../../models/Storage';

@Component({
  selector: 'app-storage-form',
  templateUrl: './storage-form.component.html',
  styleUrls: ['./storage-form.component.scss']
})
export class StorageFormComponent implements OnInit {

  constructor() { }
  @Input()
  form: FormGroup;

  @Output()
  save: EventEmitter<any> = new EventEmitter<any>();

  static createformstorage(fb: FormBuilder,storage: Storage): FormGroup {
    return fb.group({
      idConfig: storage.idConfig,
      path: storage.path,
      place: storage.place,
      serverIP: storage.serverIP,
      serverPass: storage.serverPass,
      serverLogin: storage.serverLogin,

    });


  }


  ngOnInit(): void {
  }

}
