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
    if (this.user !== null) {
      this.view = true;
    }
  }
  toggleAuthVisible() {
    this.isModalVisible = true;
  }
  onAuthModaClose() {
    this.isModalVisible = false;
  }
  isVisibleAdminPanel() {
    this.view = true;
  }
  onLogout() {
    this.authService.logout();
    this.view = false;
  }
}
