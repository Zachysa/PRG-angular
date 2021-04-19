import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Pc} from '../../models/Pc';
import {Time} from '../../models/Time';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pc-form',
  templateUrl: './pc-form.component.html',
  styleUrls: ['./pc-form.component.scss']
})
export class PcFormComponent implements OnInit {



  constructor() { }

  @Input()
 form: FormGroup;

  @Output()
  save: EventEmitter<any> = new EventEmitter<any>();



   static createform(fb: FormBuilder, pc: Pc): FormGroup {
    return fb.group( {
      ipAddress: pc.ipAddress,
      macAddress: pc.macAddress,
      name: pc.name,
      os: pc.os,

    });


  }

  ngOnInit(): void {
     }



}
