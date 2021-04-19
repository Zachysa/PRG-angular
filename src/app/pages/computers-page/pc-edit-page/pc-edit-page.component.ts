import { Component, OnInit } from '@angular/core';
import {PcService} from '../../../service/pc-service';
import {Pc} from '../../../models/Pc';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {PcFormComponent} from '../../../component/pc-form/pc-form.component';

@Component({
  selector: 'app-pc-edit-page',
  templateUrl: './pc-edit-page.component.html',
  styleUrls: ['./pc-edit-page.component.scss']
})
export class PcEditPageComponent implements OnInit {

public form: FormGroup;

public Pc: Observable<Pc>;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: PcService,
              private router: Router) { }

  ngOnInit(): void {
   const id = +this.route.snapshot.paramMap.get('id');
   this.Pc = this.service.findbyId(id).pipe(
     tap(pc => this.form = PcFormComponent.createform(this.fb, pc))
   );
  }



    save(pc: Pc): void {

    this.service.save(Object.assign(pc, this.form.value)).subscribe();
    this.router.navigate(['/computers']);
  }

}
