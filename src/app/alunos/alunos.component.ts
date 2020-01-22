import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno';
import { AlunoService } from '../services/aluno.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'tes-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos : Aluno[];
  
  constructor(private alunoService: AlunoService, private messageService: MessageService) { }
  
  getAlunos(): void {
    this.alunoService.getAlunos()
        .subscribe(alunos => this.alunos = alunos)
  }

  

  delete(aluno: Aluno): void {
    this.alunos = this.alunos.filter(h => h !== aluno);
    this.alunoService.deleteAluno(aluno).subscribe();
  }

  ngOnInit() {
    this.getAlunos();
  }

}
