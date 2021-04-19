import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pc} from '../../models/Pc';

@Component({
  selector: 'app-pc-table',
  templateUrl: './pc-table.component.html',
  styleUrls: ['./pc-table.component.scss']
})
export class PcTableComponent implements OnInit {
   @Input()
  Pc: Pc[];

   @Output()
   delete: EventEmitter<Pc> = new EventEmitter<Pc>();

  constructor() { }

  ngOnInit(): void {
  }


  deletePc(pc: Pc): void {
    this.delete.emit(pc);
}
}
