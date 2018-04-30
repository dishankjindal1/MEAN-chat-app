import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: Http
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      isRemember: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    console.log('login form values : ', this.loginForm.value);
    const url = 'http://mean-chat-alpha.herokuapp.com/api/logindata';
    this.http.post(url, this.loginForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.loginForm.reset();
    this.loginForm.setValue(['isRemember', 'false']);
  }

}
