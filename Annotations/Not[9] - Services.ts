//Servico se responsabiliza de pegar as informações externas

[I]Montando um service

	[1]Criar no prompt

		ng generate service hero

	[2]Criar getHeroes no service
		'hero.service.ts'

		//no teste, import Hero e HEROES

		getHeroes(): Hero[] {
			return HEROES
		}

	[3]Configurar no 'heroes.component.ts'

		import { VillainService } from '../villain.service'

		-atributo
		-construtor
		-metodo get

		-incluir em OnInit

		//HEROES pode ser eliminado de 'heroes.component.ts'

[II]Montando um Observable
	//Torna o método async

	[1]Importar Observable em 'hero.service'

		import { Observable, of} from 'rxjs';

	[2]Editar método get em 'hero.service'

		getHeroes(): Observable<Hero[]> {
  			return of(HEROES);
  		}

  	[3]Editar método get em 'heroes.component.ts'

  		getHeroes(): void {
   			this.heroService.getHeroes()
        		.subscribe(heroes => this.heroes = heroes)
  }