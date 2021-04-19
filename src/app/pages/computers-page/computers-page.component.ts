import { Component, OnInit } from '@angular/core';
import {PcService} from '../../service/pc-service';
import {Pc} from '../../models/Pc';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-computers-page',
  templateUrl: './computers-page.component.html',
  styleUrls: ['./computers-page.component.scss']
})
export class ComputersPageComponent implements OnInit {


  Pc: Observable<Pc[]>;

  constructor(private service: PcService) { }

  ngOnInit(): void {
    this.Pc = this.service.findall();
  }
  delete(pc: Pc): void {
    this.Pc = this.service.delete(pc).pipe(
      switchMap(() => this.service.findall())
    );
 }
}
