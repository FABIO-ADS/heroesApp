import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container {
    margin: 10px;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit(): void {
  }


  logout( ) {
      this.router.navigate(['./auth']);

  }

}
