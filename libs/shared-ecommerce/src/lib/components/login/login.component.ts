import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'shared-eommerce-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private formBuilder: FormBuilder) {}

  @Output() userLoginDetails: EventEmitter<User> = new EventEmitter();
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  login() {
    this.userLoginDetails.emit(this.loginForm.getRawValue() as User);
  }

  isEmailValid(): boolean {
    return (
      this.loginForm.controls['email'].invalid &&
      (this.loginForm.controls['email'].dirty ||
        this.loginForm.controls['email'].touched)
    );
  }

  isPassword(): boolean {
    return (
      this.loginForm.controls['password'].invalid &&
      (this.loginForm.controls['password'].dirty ||
        this.loginForm.controls['password'].touched)
    );
  }
}
