import Aluno from './aluno'
import AlunosService from './alunos.service'
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aluno: Aluno = {nome: "", cpf: "", email: "", githubLogin: ""};
  alunos: Aluno[] = [];
  alunosService: AlunosService = new AlunosService();
  gravar(aluno: Aluno){
    this.alunosService.gravar(aluno);
    this.alunos.push(aluno)
    this.aluno = {nome: "", cpf: "", email: "", githubLogin: ""};
  }
}

