import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BackUpConfig} from '../../models/BackUpConfig';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Time} from '../../models/Time';
import {Storage} from '../../models/Storage';
import {Days} from '../../models/Days';
import {Place} from '../../models/place';
import {Frequency} from '../../models/Frequenci';
import {Type} from '../../models/Type';



@Component({
  selector: 'app-new-config',
  templateUrl: './new-config.component.html',
  styleUrls: ['./new-config.component.scss']
})
export class NewConfigComponent implements OnInit {
    days : Days[] = [
    {id:1, name:'Monday'},
    {id:2, name:'Tuesday'},
    {id:3, name:'Wednesday'},
    {id:4, name:'Thursday'},
    {id:5, name:'Friday'},
    {id:6, name:'Saturday'},
    {id:7, name:'Sunday'},
     ];
  place: Place[] = [
    {id:1, name:'Local'},
    {id:2, name:'FTP'},
      ];

  frequency: Frequency[] = [
    {id:1, name:'day'},
    {id:2, name:'week'},
    {id:3, name:'month'},
    {id:4, name:'year'},
    {id:5, name:'non'},
  ];

  type: Type[]= [
    {id:1, name: 'FB'},
    {id:2, name: 'DB'},
    {id:3, name: 'IB'},

  ]
  constructor() { }
  @Input()
  form: FormGroup;

  @Output()
  save: EventEmitter<any> = new EventEmitter<any>();



  static createform(fb: FormBuilder,config: BackUpConfig): FormGroup {
    return fb.group({
     email: config.email,
      emailBool: config.emailBool,
      type: config.type,
      name: config.name,
             });
  }




  ngOnInit(): void {
  }

}
