import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { VillainsComponent } from './villains/villains.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { AlunoDetailComponent } from './aluno-detail/aluno-detail.component';
import { AgendarAulaComponent } from './agendar-aula/agendar-aula.component';

const routes: Routes = [
	{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{path: 'alunos', component: AlunosComponent},
	{path: 'agendar-aula', component: AgendarAulaComponent},
	{path: 'dashboard', component: DashboardComponent},
	{path: 'detail/:id', component: AlunoDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
