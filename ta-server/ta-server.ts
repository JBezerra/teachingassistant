import express = require('express');
import bodyParser = require("body-parser");

import { Aluno } from '../common/aluno';
import { CadastroDeAlunos } from './cadastrodealunos';

var taserver = express();

var cadastro: CadastroDeAlunos = new CadastroDeAlunos();

var allowCrossDomain = function (req: any, res: any, next: any) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
taserver.use(allowCrossDomain);

taserver.use(bodyParser.json());

taserver.get('/alunos', function (req: express.Request, res: express.Response) {
  res.send(JSON.stringify(cadastro.getAlunos()));
})

taserver.post('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno>req.body; //verificar se é mesmo Aluno!
  const { nome, cpf, email } = aluno;
  if (nome != null && cpf != null && email != null) {
    aluno = cadastro.cadastrar(aluno);
    if (aluno) {
      res.send({ "success": "O aluno foi cadastrado com sucesso" });
    }
    else{
      res.send({ "failure": "O aluno não pode ser cadastrado" });
    }
  }else{
    res.send({ "failure": "O aluno não pode ser cadastrado" });
  }
})

taserver.put('/aluno', function (req: express.Request, res: express.Response) {
  var aluno: Aluno = <Aluno>req.body;
  aluno = cadastro.atualizar(aluno);
  if (aluno) {
    res.send({ "success": "O aluno foi atualizado com sucesso" });
  } else {
    res.send({ "failure": "O aluno não pode ser atualizado" });
  }
})

taserver.delete('/aluno/:cpf', function (req: express.Request, res: express.Response) {
  let studentCpf = req.params.cpf;
  let removedStudent = cadastro.remover(studentCpf);
  if (removedStudent) {
    res.send({ "success": "O aluno foi removido com sucesso" });
  } else {
    res.send({ "failure": "O aluno não pode ser removido" });
  }
})

var server = taserver.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
  server.close();
}

export { server, closeServer }