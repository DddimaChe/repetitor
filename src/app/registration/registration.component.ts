import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  form: FormGroup;
  isSub: Subscription;

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      otchestvo: new FormControl(null, [Validators.required]),
      phone: new FormControl('+' + 380, [Validators.required, Validators.pattern('[0-9]{0-10}')])
    });
  }

  ngOnDestroy() {
    if (this.isSub) {
      this.isSub.unsubscribe();
    }
  }

  onSubmit() {
    this.form.disable();
    this.isSub = this.auth.register(this.form.value)
      .subscribe(
        () => {
          this.router.navigate(['/'], {
            queryParams: {
              registered: true
            }
          });
        },
        error => {
          console.log(error);
          this.form.enable();
        }
      );
  }

}
