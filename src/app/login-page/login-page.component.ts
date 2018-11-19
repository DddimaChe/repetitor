import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isSub: Subscription;  // Отвечает за утечку памяти

  constructor(private  auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {

      } else if (params['accessDenied']) {

      }
    });
  }

  ngOnDestroy() {
    if (this.isSub) {
      this.isSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.isSub = this.auth.login(this.form.value)
      .subscribe(
        res => {
          const result = +res;
          if (result === 0) {
            this.router.navigate(['/']);
            this.auth.logInUser();
          } else if (result === 1 || result === 2) {
            console.log();
          }
        },
        error => {
          console.log(error);
          this.form.enable();
        }
      );
  }
}
