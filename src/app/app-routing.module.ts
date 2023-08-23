import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministrativoComponent } from './home/home-administrativo/home-administrativo.component';
import { HomeClienteComponent } from './home/home-cliente/home-cliente.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EventosClienteComponent } from './pages/eventos/eventos-cliente/eventos-cliente.component';
import { EventosCadastrarComponent } from './pages/eventos/eventos-cadastrar/eventos-cadastrar.component';
import { EventosLsitarComponent } from './pages/eventos/eventos-lsitar/eventos-lsitar.component';
import { SolicitacaoClienteComponent } from './pages/sac/solicitacao-cliente/solicitacao-cliente.component';
import { EventoVisualizarComponent } from './pages/eventos/evento-visualizar/evento-visualizar.component';
import { QuitacaoEventoComponent } from './pages/comercial/quitacao-evento/quitacao-evento.component';
import { MelhoresEventosComponent } from './pages/administracao/melhores-eventos/melhores-eventos.component';
import { MelhoresClientesComponent } from './pages/administracao/melhores-clientes/melhores-clientes.component';
import { EventosVisualizarAdmComponent } from './pages/eventos/eventos-visualizar-adm/eventos-visualizar-adm.component';

const routes: Routes = [
  {
    path: 'home-administrativo',
    component: HomeAdministrativoComponent,
  },
  {
    path: 'home-cliente',
    component: HomeClienteComponent,
  },
  {
    path: 'inicio',
    component: PaginaInicialComponent,
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'eventos/meus-eventos',
    component: EventosClienteComponent
  },
  {
    path: 'eventos/cadastro',
    component: EventosCadastrarComponent
  },
  {
    path: 'eventos/listar',
    component: EventosLsitarComponent
  },
  {
    path: 'sac/solicatao-cliente',
    component: SolicitacaoClienteComponent
  },
  {
    path: 'eventos/visualizar',
    component: EventoVisualizarComponent
  },
  {
    path: 'comercial/quitacao-evento',
    component: QuitacaoEventoComponent
  },
  {
    path: 'administracao/melhores-eventos',
    component: MelhoresEventosComponent
  },
  {
    path: 'administracao/melhores-clientes',
    component: MelhoresClientesComponent
  },
  {
    path: 'eventos/visualizar-adm',
    component: EventosVisualizarAdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
