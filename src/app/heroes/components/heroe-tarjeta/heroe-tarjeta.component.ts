import { Heroe } from '../../interfaces/heroes.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent  {

  @Input()
    heroe!: Heroe;

}
