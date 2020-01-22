import { Injectable } from '@angular/core';
import { Villain } from './villains/villain.model';
import { VILLAINS } from './villains/mock-villains';
import { MessageService } from './services/message.service';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor(private messageService: MessageService) { }

  getVillains() : Observable<Villain[]> {
  	this.messageService.add('VillainService: fetched villains')
  	return of(VILLAINS);
  }
}
