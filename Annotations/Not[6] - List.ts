[I]Criar uma lista de elementos

	[1]Criar uma model heroes interface {}
		'heroes.model.ts' [new]
	}

	[2]Criar um vetor contendo cada elemento //Simula DB
		'mock-heroes.ts' [new]

		export const HEROES: Hero[] = [
  			{ id: 11, name: 'Dr Nice' },
  			{ id: 12, name: 'Narco' }
  			...
  		];

  	[3]Importar Hero e HEROES em 'heroes.component.ts' e declarar uma variavel heroes em OnInit

  		import { Hero } from '../hero';
  		import { HEROES } from '../mock-heroes';

  		heroes = HEROES; //atencao no sinal de =


  	[4]Add elemento de lista em 'heroes.component.html'

		<h2>My Heroes</h2>
		<ul class="heroes">
			<li *ngFor="let hero of heroes">
				<span class="badge">{{hero.id}}</span> {{hero.name}}
			</li>
		</ul>

	[5]Add estilo pessoal em css

	[6]Add uso em 'app.component.html'

		<tes-heroes></tes-heroes>

	//Components serão geradas automaticamente em 'app.module.ts'

