import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { SESSION_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user: User;
  errorMessage: string;

  constructor(@Inject(SESSION_STORAGE) private storage: WebStorageService,
    private router: Router) {

     }

  ngOnInit() {
    this.user = new User();
    this.errorMessage = '';

  }

  login(user: User) {
    if (user.username === 'Milos') {
      this.storage.set('isActiveSession', true);
      this.router.navigate(['/catalog']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
