import { HeroeComponent } from './pages/heroe/heroe.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
        children: [
      {
        path: 'listar',
        component: ListarComponent
      },
      {
        path: 'agregar',
        component: AgregarComponent
          },
      {
        path: 'editar/:id',
        component: AgregarComponent
          },
      {
        path: 'buscar',
        component: BuscarComponent
          },
      {
        path: ':id',
        component: HeroeComponent
      },
      {
        path: '**',
        redirectTo: 'listar'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
