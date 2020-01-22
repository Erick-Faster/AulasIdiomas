[I]Add efeito de clique

	[1]Adicionar event binding

		<li *ngFor="let hero of heroes" (click)="onSelect(hero)">

	[2]Adicionar evento em 'heros.component.ts'

		selectedHero: Hero; //Atributo 'heroi selecionado'

		onSelect(hero: Hero): void {
		  this.selectedHero = hero;
		}

	[3]Incluir selectedHero no template

		content_copy
		<h2>{{selectedHero.name | uppercase}} Details</h2>
		<div><span>id: </span>{{selectedHero.id}}</div>
		<div>
		  <label>name:
		    <input [(ngModel)]="selectedHero.name" placeholder="name"/>
		  </label>
		</div>

	[4] Add *ngIf
		//Hidden se não houver 'selectedHero'

	[5] Add css

		[class.some-css-class]="some-condition"

		------

		<li *ngFor="let hero of heroes"
		  [class.selected]="hero === selectedHero"
		  (click)="onSelect(hero)">
		  <span class="badge">{{hero.id}}</span> {{hero.name}}
		</li>
