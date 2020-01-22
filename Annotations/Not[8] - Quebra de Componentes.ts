[I]Dividir um componente em subcomponentes, dividindo tarefas

	[1]Criar um novo componente
		'hero-detail' [new]

	[2]Importar e adicionar Input ao 'hero-detail-component'
		import { Input } from '@angular/core';
		import { Hero } from '../hero';

		@Input() hero: Hero;

	[3]Add template desejado no novo componente 'hero-detail-component.html'

	[4]Add localizacao com prefixo no 'heroes.component.html'

		<tes-hero-detail></tes-hero-detail>

	[5]Neste, adicionar property Binding:

		<app-hero-detail [hero]="selectedHero"></app-hero-detail>
