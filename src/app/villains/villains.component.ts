import { Component, OnInit } from '@angular/core';
import { Villain } from './villain.model';
import { VillainService } from '../villain.service';

@Component({
  selector: 'tes-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  villains : Villain[];
  
  selectedVillain : Villain;
  

  constructor(private villainService : VillainService) { }
  
  getVillains() : void{
  	this.villainService.getVillains()
  		.subscribe(villains => this.villains = villains)
  }

  onSelect(villain: Villain): void{
  	this.selectedVillain = villain;
  }

  ngOnInit() {
  	this.getVillains();
  }

}
