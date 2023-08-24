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
import { QuitacaoEventoComponent } from './pages/comercial/quitacao-evento/quitacao-evento.component';
import { MelhoresEventosComponent } from './pages/administracao/melhores-eventos/melhores-eventos.component';
import { MelhoresClientesComponent } from './pages/administracao/melhores-clientes/melhores-clientes.component';
import { EventosVisualizarAdmComponent } from './pages/eventos/eventos-visualizar-adm/eventos-visualizar-adm.component';
import { CreditoListarComponent } from './pages/sac/credito-listar/credito-listar.component';
import { CreditoCadastrarComponent } from './pages/sac/credito-cadastrar/credito-cadastrar.component';
import { EstornoComponent } from './pages/financeiro/estorno/estorno.component';

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
    QuitacaoEventoComponent,
    MelhoresEventosComponent,
    MelhoresClientesComponent,
    EventosVisualizarAdmComponent,
    CreditoListarComponent,
    CreditoCadastrarComponent,
    EstornoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
