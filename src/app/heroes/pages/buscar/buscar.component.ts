import { HeroesService } from './../../services/heroes.service';
import { Heroe } from './../../interfaces/heroes.interfaces';
import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelecionado: Heroe | undefined;

  constructor( private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {

    this.heroesService.getSugestoes( this.termino.trim() ).subscribe( heroes => this.heroes = heroes
    );

  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.heroeSelecionado = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId( heroe.id! ).subscribe( heroe => this.heroeSelecionado = heroe);

  }

}
