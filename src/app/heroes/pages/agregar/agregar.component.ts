import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from './../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from './../../interfaces/heroes.interfaces';
import { HeroesService } from './../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
    img {
        width: 100%;
        border-radius: 10px;
    }`,
  ],
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
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroePorId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  salvar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // Atualizar
      this.heroesService
        .atualizarHeroe(this.heroe)
        .subscribe(heroe => this.mostrarSnackBar('Registro Atualizado!'));
    } else {
      // Criar
      this.heroesService.adicionarHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('Registro Salvo!');
      });
    }
  }

  excluir() {

    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe
    });

    dialog.afterClosed().subscribe(
      (result) => {
        if (result) {
          this.heroesService.excluirHeroe(this.heroe.id!)
            .subscribe(resp => {
              this.router.navigate(['/heroes']);
            });
        }
      }
    )
  }

  mostrarSnackBar(mensagem: string) {

    this.snackBar.open(mensagem, 'Ok!', {
      duration: 2000
    });
  }
}

