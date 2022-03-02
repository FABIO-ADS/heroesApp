import { Heroe } from '../../interfaces/heroes.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [`
  mat-card {
    margin-top: 10px;
  }
  `]
})
export class HeroeTarjetaComponent  {

  @Input()
    heroe!: Heroe;

}
