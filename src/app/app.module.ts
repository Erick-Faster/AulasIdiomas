import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { VillainsComponent } from './villains/villains.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { VillainDetailComponent } from './villain-detail/villain-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlunoService } from './services/aluno.service';
import { HeaderComponent } from './header/header.component';
import { AgendarAulaComponent } from './agendar-aula/agendar-aula.component';
import { HorariosComponent } from './horarios/horarios.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    VillainsComponent,
    AlunoDetailComponent,
    VillainDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    AgendarAulaComponent,
    HorariosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
