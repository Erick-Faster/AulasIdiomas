[I]Criar Route

	[1]Gerar controlador da Route

		'ng generate module app-routing --flat --module=app'

		//No teste, este ja estava gerado

	[2]Atualizar 'app-routing.module.ts'

		import { NgModule } from '@angular/core';
		import { RouterModule, Routes } from '@angular/router';
		import { HeroesComponent } from './heroes/heroes.component';

		const routes: Routes = [
		  { path: 'heroes', component: HeroesComponent }
		];

		@NgModule({
		  imports: [RouterModule.forRoot(routes)],
		  exports: [RouterModule]
		})
		export class AppRoutingModule { }

[II]Add nova Route

	[1]Importar Componente desejado em 'app-routing.modulo.ts'

		import { VillainsComponent } from './villains/villains.component';

	[2]Add path relacionado:

		const routes: Routes = [
			{path: 'heroes', component: HeroesComponent},
			{path: 'villains', component: VillainsComponent}
		];

	[3]Atualizar 'app.component.html'

		<router-outlet></router-outlet>

	//router-outlet só aparece de acordo com o path atribuido

		// ex: http:/localhost:4200/heroes
		// ex: http:/localhost:4200/villains
		  //->Ambos aparecem em router-outlet

[III]Determinar index

	[1]Add nos paths de 'app-routing.module'

		{path: '', redirectTo: '/dashboard', pathMatch: 'full'},



