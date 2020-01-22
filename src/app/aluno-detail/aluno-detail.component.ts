import { Component, OnInit, Input } from '@angular/core';
import { Aluno } from '../alunos/aluno';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { AlunoService } from '../services/aluno.service';



@Component({
  selector: 'tes-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  @Input() aluno: Aluno;

  constructor(
  	private route: ActivatedRoute,
  	private alunoService: AlunoService,
  	private location: Location) { }

  ngOnInit() : void{
  	this.getAluno();
  }

  goBack(): void {
  	this.location.back();
  }

  getAluno(): void {
  	const id = this.route.snapshot.paramMap.get('id');
  	this.alunoService.getAluno(id)
  		.subscribe(aluno => this.aluno = aluno);
  }

  save(): void {
  	this.alunoService.updateAluno(this.aluno)
  	  .subscribe(() => this.goBack());
  }

}
