import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PcService} from '../../../service/pc-service';
import {Pc} from '../../../models/Pc';
import {PcFormComponent} from '../../../component/pc-form/pc-form.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pc-new-page',
  templateUrl: './pc-new-page.component.html',
  styleUrls: ['./pc-new-page.component.scss']
})
export class PcNewPageComponent implements OnInit {

  public form: FormGroup;



  constructor(private fb: FormBuilder,
              private service: PcService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = PcFormComponent.createform(this.fb , new Pc());
   }


    save(): void {

    this.service.save(this.form.value).subscribe();
    this.router.navigate(['/computers']);
  }


}
