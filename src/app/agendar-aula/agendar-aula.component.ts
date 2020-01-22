import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { Aluno } from '../alunos/aluno';

@Component({
  selector: 'tes-agendar-aula',
  templateUrl: './agendar-aula.component.html',
  styleUrls: ['./agendar-aula.component.css']
})
export class AgendarAulaComponent implements OnInit {
  
  alunos : Aluno[] = [];

  constructor(private alunoService : AlunoService,) { }

  add(nome: string, idioma: string, nivel: string, email: string): void {
    nome = nome.trim();
    idioma = idioma.trim();
    nivel = nivel.trim();
    email = email.trim();
    if (!nome || !idioma || !nivel || !email ) { return; }
    this.alunoService.addAluno({ nome, idioma, nivel, email } as Aluno)
      .subscribe(aluno => {
        console.log(aluno);
        this.alunos.push(aluno);
      })
  }

  ngOnInit() {
  }

}
