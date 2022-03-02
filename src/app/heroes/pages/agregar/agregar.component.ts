import { Heroe, Publisher } from './../../interfaces/heroes.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  publisher = [
    {
      id: 'DC Comics',
      descricao: 'DC  -  Comics',
    },
    {
      id: 'Marvel Comics',
      descricao: 'Marvel  -  Comics',
    }
  ];

  heroe: Heroe  = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  }

  constructor() {}

  ngOnInit(): void {}
}
