import { Injectable } from '@angular/core';
import { Aluno } from '../alunos/aluno';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunosUrl = 'https://localhost:44367/api/v1/alunos';

  httpOptions = {
  	headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor( private messageService: MessageService,
  			   private http: HttpClient ) { }
  
  //Get({id})
  getAluno(id: string): Observable<Aluno>{
  	const url = `${this.alunosUrl}/${id}`;
  	return this.http.get<Aluno>(url).pipe(
  		tap(_ => this.log(`fetched aluno id=${id}`)),
  		catchError(this.handleError<Aluno>(`getAluno id=${id}`))
  	);
  }
  
  
  getAlunos(): Observable<Aluno[]> {
  	return this.http.get<Aluno[]>(this.alunosUrl)
  		.pipe(
  			tap(_ => this.log('fetched alunos')),
  			catchError(this.handleError<Aluno[]>('getAlunos', []))
  		);
  }

  //Post
  addAluno (aluno: any): Observable<any> {
	  console.log(aluno);
	const id = typeof aluno === 'string' ? aluno : aluno.id;
  	return this.http.post<any>(this.alunosUrl, aluno, this.httpOptions).pipe(
  		  tap((newAluno: any) => this.log(`added aluno w/ id=${newAluno.id}`)),
  		  catchError(this.handleError<any>('addAluno'))
  	);
  }
  
  //Put
  updateAluno(aluno: Aluno): Observable<any> {
	const id = typeof aluno === 'string' ? aluno : aluno.id;
	const url = `${this.alunosUrl}/${id}`;

  	return this.http.put(url, aluno, this.httpOptions).pipe(
  		tap(_ => this.log(`updated aluno id=${aluno.id}`)),
  		catchError(this.handleError<any>('updateAluno'))
  	);
  }

  //Delete
  deleteAluno (aluno: Aluno | string): Observable<Aluno> {
  	const id = typeof aluno === 'string' ? aluno : aluno.id;
  	const url = `${this.alunosUrl}/${id}`;

  	return this.http.delete<Aluno>(url, this.httpOptions).pipe(
  		tap(_ => this.log(`deleted aluno id=${id}`)),
  		catchError(this.handleError<Aluno>('deleteAluno'))
  	);
  }

  private log(message: string){
  	this.messageService.add(`AlunoService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?:T) {
  	return (error: any): Observable<T> => {

  		console.error(error);

  		this.log(`${operation} failed: ${error.message}`);

  		return of(result as T);
  	}
  }
}
