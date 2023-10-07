import { EventosVisualizarComponent } from './pages/administrativo/eventos/eventos-visualizar/eventos-visualizar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdministrativoComponent } from './home/home-administrativo/home-administrativo.component';
import { HomeClienteComponent } from './home/home-cliente/home-cliente.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EventosListagemComponent } from './pages/administrativo/eventos/eventos-listagem/eventos-listagem.component';
import { ClientesCadastroComponent } from './pages/administrativo/clientes/clientes-cadastro/clientes-cadastro.component';
import { ClientesListagemComponent } from './pages/administrativo/clientes/clientes-listagem/clientes-listagem.component';
import { StaffCadastroComponent } from './pages/administrativo/staff/staff-cadastro/staff-cadastro.component';
import { StaffListagemComponent } from './pages/administrativo/staff/staff-listagem/staff-listagem.component';
import { EventosClientesCadastroComponent } from './pages/administrativo/eventos-clientes/eventos-clientes-cadastro/eventos-clientes-cadastro.component';
import { EventosClientesListagemComponent } from './pages/administrativo/eventos-clientes/eventos-clientes-listagem/eventos-clientes-listagem.component';
import { EventosStaffCadastroComponent } from './pages/administrativo/eventos-staff/eventos-staff-cadastro/eventos-staff-cadastro.component';
import { EventosStaffListagemComponent } from './pages/administrativo/eventos-staff/eventos-staff-listagem/eventos-staff-listagem.component';
import { EventosCadastroComponent } from './pages/administrativo/eventos/eventos-cadastro/eventos-cadastro.component';
import { EventosEditarComponent } from './pages/administrativo/eventos/eventos-editar/eventos-editar.component';
import { EscalaListagemComponent } from './pages/administrativo/escala/escala-listagem/escala-listagem.component';
import { EscalaCadastroComponent } from './pages/administrativo/escala/escala-cadastro/escala-cadastro.component';

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
    path: 'eventos',
    children: [
      {
        path: 'cadastar',
        component: EventosCadastroComponent,
      },
      {
        path: 'listar',
        component: EventosListagemComponent,
      },
      {
        path: 'visualizar',
        component: EventosVisualizarComponent
      },
      {
        path: 'editar',
        component: EventosEditarComponent
      }
    ]
  },
  {
    path: 'staff',
    children: [
      {
        path: 'cadastar',
        component: StaffCadastroComponent,
      },
      {
        path: 'listar',
        component: StaffListagemComponent,
      },
    ]
  },
  {
    path: 'clentes',
    children: [
      {
        path: 'cadastar',
        component: ClientesCadastroComponent,
      },
      {
        path: 'listar',
        component: ClientesListagemComponent,
      }
    ]
  },
  {
    path: 'staff',
    children: [
      {
        path: 'cadastar',
        component: StaffCadastroComponent,
      },
      {
        path: 'listar',
        component: StaffListagemComponent,
      }
    ]
  },
  {
    path: 'eventos-clientes',
    children: [
      {
        path: 'cadastar',
        component: EventosClientesCadastroComponent,
      },
      {
        path: 'listar',
        component: EventosClientesListagemComponent,
      }
    ]
  },
  {
    path: 'eventos-staff',
    children: [
      {
        path: 'cadastar',
        component: EventosStaffCadastroComponent,
      },
      {
        path: 'listar',
        component: EventosStaffListagemComponent,
      }
    ]
  },
  {
    path: 'escala',
    children: [
      {
        path: 'cadastar',
        component: EscalaCadastroComponent,
      },
      {
        path: 'listar',
        component: EscalaListagemComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
