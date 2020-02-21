import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './../../models/user.model';
import { UsersService } from './../../services/users.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'movie-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  form: FormGroup;
  message: string;
  @Input() isModalVisible;
  @Output() authModaClose = new EventEmitter<any>();

  constructor(private usersService: UsersService,
              private authService: AuthService) { }

  ngOnInit() {

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  close() {
   this.authModaClose.emit();
  }

  onSubmit() {
    const formData = this.form.value;

    this.usersService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formData.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.authModaClose.emit();
          } else {
            this.message = 'Пароль не верный';
          }
        } else {
          this.message = 'Такого пользователя не существует';
        }
      });
  }
}