[I]2-way-binding

	[1]Em 'app.module.ts', importar e add em imports:

		import { FormsModule } from '@angular/forms' //Aq tem NgModel

		imports: [
			FormsModule
		]

	[2]Em 'heroes.component.html', add ngModel:


		<label>name:
    		<input [(ngModel)]="hero.name" placeholder="name"/>
  		</label>

  		[(ngModel)] is Angulars two-way data binding syntax.

		//Here it binds the hero.name property to the HTML textbox so that data can flow in both directions: 
		//from the hero.name property to the textbox, and from the textbox back to the hero.name.

	[X]Notar que em 'app.module.ts', os componentes HeroesComponent
	foram declarados automaticamente, junto com a sua importação