import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackUpConfig} from '../../models/BackUpConfig';
import {Time} from '../../models/Time';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-time-form',
  templateUrl: './time-form.component.html',
  styleUrls: ['./time-form.component.scss']
})
export class TimeFormComponent implements OnInit {

  constructor() { }
  @Input()
  form: FormGroup;

  @Input()
  Config: BackUpConfig[];

  @Output()
  save: EventEmitter<any> = new EventEmitter<any>();

  static createformtime(fb: FormBuilder,time: Time): FormGroup {
    return fb.group({
      date: time.date,
      days: time.days,
      frequency: time.frequency,
      idConfig: time.idConfig,

    });
  }

  ngOnInit(): void {
  }

}
export class NgbdDatepickerPopup {
  model: NgbDateStruct; }

