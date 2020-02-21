import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isModalVisible: boolean;
  login: boolean;
  user: User;
  view: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
  toggleAuthVisible() {
    this.isModalVisible = true;
    if (this.user) {
      this.view = true;
    }
  }
  onAuthModaClose() {
    this.isModalVisible = false;
  }
  onLogout() {
    this.authService.logout();
    this.view = false;
  }
}
