import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(   private router: Router  ) { }

  login( ) {
    // Ir para o Backend
    // Um Usuário

    this.router.navigate(['./heroes']);

  }


}
