import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth-service';
import {ActivatedRoute, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../../models/Users';
import {UserService} from '../../service/User-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

 form: FormGroup;

  User: Observable<User[]>;

  @Input()
  User2: User[];

  constructor(private fb: FormBuilder,  private service: AuthService, private router: Router,
              private route: ActivatedRoute, private service2: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]

    });
    this.User = this.service2.findall();
  }

  public Login(): void {
  this.service.Login(this.form.value).pipe(filter(value => value === true)).subscribe(() => this.router.navigate(['/dashboard']));
}
}
