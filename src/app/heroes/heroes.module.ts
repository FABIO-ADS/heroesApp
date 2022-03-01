import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesRoutingModule } from './heroes-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListarComponent,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule
  ],
})
export class HeroesModule {}
