import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosCadastrarComponent } from './pages/eventos/eventos-cadastrar/eventos-cadastrar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HomeAdministrativoComponent } from './home/home-administrativo/home-administrativo.component';
import { HomeClienteComponent } from './home/home-cliente/home-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { MenuClientesComponent } from './menu/menu-clientes/menu-clientes.component';
import { MenuAdministrativoComponent } from './menu/menu-administrativo/menu-administrativo.component';
import { DashboardClienteComponent } from './pages/dashboard//dashboard-cliente/dashboard-cliente.component';
import { DashboardAdministrativoComponent } from './pages/dashboard/dashboard-administrativo/dashboard-administrativo.component';
import { EventosClienteComponent } from './pages/eventos/eventos-cliente/eventos-cliente.component';
import { EventosLsitarComponent } from './pages/eventos/eventos-lsitar/eventos-lsitar.component';
import { SolicitacaoClienteComponent } from './pages/sac/solicitacao-cliente/solicitacao-cliente.component';
import { EventoVisualizarComponent } from './pages/eventos/evento-visualizar/evento-visualizar.component';
import { EventosVisualizarAdmComponent } from './pages/eventos/eventos-visualizar-adm/eventos-visualizar-adm.component';
import { CreditoListarComponent } from './pages/sac/credito-listar/credito-listar.component';
import { CreditoCadastrarComponent } from './pages/sac/credito-cadastrar/credito-cadastrar.component';
import { EstornoComponent } from './pages/financeiro/estorno/estorno.component';
import { EventosCadastroComponent } from './pages/administrativo/eventos/eventos-cadastro/eventos-cadastro.component';
import { EventosListagemComponent } from './pages/administrativo/eventos/eventos-listagem/eventos-listagem.component';
import { ClientesCadastroComponent } from './pages/administrativo/clientes/clientes-cadastro/clientes-cadastro.component';
import { ClientesListagemComponent } from './pages/administrativo/clientes/clientes-listagem/clientes-listagem.component';
import { EventosClientesCadastroComponent } from './pages/administrativo/eventos-clientes/eventos-clientes-cadastro/eventos-clientes-cadastro.component';
import { EventosClientesListagemComponent } from './pages/administrativo/eventos-clientes/eventos-clientes-listagem/eventos-clientes-listagem.component';
import { EventosStaffCadastroComponent } from './pages/administrativo/eventos-staff/eventos-staff-cadastro/eventos-staff-cadastro.component';
import { EventosStaffListagemComponent } from './pages/administrativo/eventos-staff/eventos-staff-listagem/eventos-staff-listagem.component';
import { StaffCadastroComponent } from './pages/administrativo/staff/staff-cadastro/staff-cadastro.component';
import { StaffListagemComponent } from './pages/administrativo/staff/staff-listagem/staff-listagem.component';
import { EventosCategoriaCadastroComponent } from './pages/administrativo/eventos/eventos-categoria/eventos-categoria-cadastro/eventos-categoria-cadastro.component';
import { EventosCategoriaListagemComponent } from './pages/administrativo/eventos/eventos-categoria/eventos-categoria-listagem/eventos-categoria-listagem.component';
import { RequestSpinnerComponent } from './shared/components/request-spinner/request-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select'
import { HttpClientModule } from '@angular/common/http';
import { EventosEditarComponent } from './pages/administrativo/eventos/eventos-editar/eventos-editar.component';
import { EventosVisualizarComponent } from './pages/administrativo/eventos/eventos-visualizar/eventos-visualizar.component';
import { EscalaListagemComponent } from './pages/administrativo/escala/escala-listagem/escala-listagem.component';
import { EscalaCadastroComponent } from './pages/administrativo/escala/escala-cadastro/escala-cadastro.component';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { PedidosCadastroComponent } from './pages/administrativo/pedidos/pedidos-cadastro/pedidos-cadastro.component';
import { PedidosListagemComponent } from './pages/administrativo/pedidos/pedidos-listagem/pedidos-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    EventosCadastrarComponent,
    LoginComponent,
    HomeAdministrativoComponent,
    HomeClienteComponent,
    PaginaInicialComponent,
    MenuClientesComponent,
    MenuAdministrativoComponent,
    DashboardClienteComponent,
    DashboardAdministrativoComponent,
    EventosClienteComponent,
    EventosLsitarComponent,
    SolicitacaoClienteComponent,
    EventoVisualizarComponent,
    EventosVisualizarAdmComponent,
    CreditoListarComponent,
    CreditoCadastrarComponent,
    EstornoComponent,
    EventosCadastroComponent,
    EventosListagemComponent,
    EventosClientesCadastroComponent,
    EventosClientesListagemComponent,
    EventosStaffCadastroComponent,
    EventosStaffListagemComponent,
    StaffCadastroComponent,
    StaffListagemComponent,
    EventosCategoriaCadastroComponent,
    EventosCategoriaListagemComponent,
    RequestSpinnerComponent,
    EventosEditarComponent,
    EventosVisualizarComponent,
    EscalaListagemComponent,
    EscalaCadastroComponent,
    ClientesCadastroComponent,
    ClientesListagemComponent,
    PedidosCadastroComponent,
    PedidosListagemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NgSelectModule,
    AngularDualListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
