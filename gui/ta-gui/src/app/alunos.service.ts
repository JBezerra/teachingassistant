import Aluno from './aluno'

export default class AlunosService {
  alunos: Aluno[] = []

  gravar(aluno: Aluno): Aluno {
    this.alunos.push(aluno);
    return aluno;
  }
}
