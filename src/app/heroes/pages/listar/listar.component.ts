import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
  ]
})
export class ListarComponent implements OnInit {

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe(
      resp => console.log(resp));
  }

}
