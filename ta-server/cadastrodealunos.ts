import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
   alunos: Aluno[] = [];

    cadastrar(aluno: Aluno): Aluno {
     var result = null;
     if (this.cpfNaoCadastrado(aluno.cpf) && this.githubLoginNaoCadastrado(aluno.githubLogin)) {
       result = new Aluno();
       result.copyFrom(aluno);
       this.alunos.push(result);
     }
     return result;
   }

    cpfNaoCadastrado(cpf: string): boolean {
      return !this.alunos.find(a => a.cpf == cpf);
   }

    githubLoginNaoCadastrado(githubLogin: string): boolean {
      return !this.alunos.find(a => a.githubLogin == githubLogin);
   }

    atualizar(aluno: Aluno): Aluno {
     var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
     if (result) result.copyFrom(aluno);
     return result;
   }

   remover(cpf: string): Aluno {
     var studentIndex = this.alunos.findIndex(aluno => aluno.cpf == cpf);
     if(studentIndex >= 0){
      var student = this.alunos[studentIndex];
      this.alunos.splice(studentIndex, 1);
      return student;
     }

     return null;
   }

    getAlunos(): Aluno[] {
     return this.alunos;
   }
}