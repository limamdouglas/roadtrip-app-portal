import { RequestSpinnerService } from 'src/app/shared/components/request-spinner/request-spinner.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { CategoriaEventoDto } from 'src/app/models/categoria-evento/categoria-evento-dto';
import { CategoriaEventoService } from 'src/app/services/categoria-evento/categoria-evento.service';

@Component({
  selector: 'app-select-categoria-evento',
  templateUrl: './select-categoria-evento.component.html',
  styleUrls: ['./select-categoria-evento.component.scss']
})
export class SelectCategoriaEventoComponent {

  @Input() controlName: string;
  spinnerSelectCategoriaEvento = 'spinner-select-CategoriaEvento';
  categoriaEventos: CategoriaEventoDto[];

  constructor(private categoriaEventoSvc: CategoriaEventoService,
    public controlContainer: ControlContainer,
    private spinnerSvc: RequestSpinnerService) {
    }

    ngOnInit(): void {
      this.carregaDepartamentos();
    }

    carregaDepartamentos(){
      this.spinnerSvc.show(this.spinnerSelectCategoriaEvento);
      this.categoriaEventoSvc.listarCategoriaEventos()
      .pipe(finalize(() => this.spinnerSvc.hide(this.spinnerSelectCategoriaEvento)))
      .subscribe((data: any) => {
        this.categoriaEventos = data.result;
      });
    }
}
