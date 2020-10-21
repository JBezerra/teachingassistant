import { CadastroDeAlunos } from '../cadastrodealunos';
import { Aluno } from '../../common/aluno';

describe("O cadastro de alunos", () => {
  var cadastro: CadastroDeAlunos;

  function cadastrarAluno(nome:string, cpf:string) {
    var aluno: Aluno = new Aluno();
    aluno.nome = nome;
    aluno.cpf = cpf;
    cadastro.cadastrar(aluno);
  }

  function expectSoUmAluno() {
    expect(cadastro.getAlunos().length).toBe(1);
    var aluno = cadastro.getAlunos()[0];
    return aluno;
  }

  beforeEach(() => cadastro = new CadastroDeAlunos())

  it("é inicialmente vazio", () => {
    expect(cadastro.getAlunos().length).toBe(0);
  })

  it("cadastra alunos corretamente", () => {
    cadastrarAluno("Mariana","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
    expect(aluno.cpf).toBe("683");
    expect(aluno.email).toBe("");
    expect(aluno.metas.size).toBe(0);
  })

  it("não aceita alunos com CPF duplicado", () => {
    cadastrarAluno("Mariana","683");
    cadastrarAluno("Pedro","683");

    var aluno = expectSoUmAluno();
    expect(aluno.nome).toBe("Mariana");
  })

  it("atualiza alunos corretamente", () => {
    var addStudent: Aluno = new Aluno();
    addStudent.nome = "Mariana";
    addStudent.cpf = "683";
    addStudent.email = "mari684@paulo.com";
    cadastro.cadastrar(addStudent);

    addStudent.email = "mari685@paulo.com";
    cadastro.atualizar(addStudent);

    let student = cadastro.getAlunos()[0];
    expect(student.email).toBe(addStudent.email);
  })

  it("remove alunos corretamente", () => {
    var addStudent: Aluno = new Aluno();
    addStudent.nome = "Mariana";
    addStudent.cpf = "683";
    addStudent.email = "mari684@paulo.com";
    cadastro.cadastrar(addStudent);
    cadastro.remover(addStudent.cpf);

    let student = cadastro.getAlunos();
    expect(student.length).toBe(0);
  })

})


