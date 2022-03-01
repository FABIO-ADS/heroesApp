import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styles: [
    `
    mat-card{
margin-top : 10px;
    }
    `]
})
export class ListarComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe( heroes => this.heroes = heroes );
  }

}
