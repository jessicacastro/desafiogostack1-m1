const express = require('express');

const server = express();

server.use(express.json());

//Variável para contar quantidade de requests;
let requestNumber = 0;
// Arrays podem receber adições e exclusões mesmo sendo constantes;
const projects = [];


/**
 * Middlewares
 */

// Checa se o projeto existe antes de realizar a requisição.
checkIfProjectExists = (req, res, next) => {
  const { id } = req.params;
  const project = projects.find( p => p.id == id );

  if(!project) {
    return res.status(400).json({ error: 'Project does not exists '});
  }

  return next();
}

//Log no número de requisições feitas - GLOBAL;
logMiddleware = (req, res, next) => {
  requestNumber++;

  console.log("Request");
  console.log(`Número de requisições realizadas: ${requestNumber}`);
  console.log(`Método: ${req.method}. URL: ${req.url}`);

  return next();
}

server.use(logMiddleware);

//RETORNA TODOS OS PROJETOS
server.get('/projects', (req, res) => {
  return res.json(projects);
});

//RETORNA UM PROJETO ESPECÍFICO
server.get('/projects/:id/', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const project = projects.find( p => p.id == id );

  return res.json(project);
});

//ADICIONA UM PROJETO
server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id: id, 
    title: title, 
    tasks: []
  }

  projects.push(project);

  return res.json(project);
});

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find( p => p.id == id );

  project.title = title;

  return res.json(project);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex( p => p.id == id );

  projects.splice(projectIndex, 1);

  return res.send();
});


/**
* TASKS
**/
server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { id } = req.params;
  const { titleTask } = req.body;
  
  const project = projects.find(p => p.id == id );

  project.tasks.push(titleTask);

  return res.json(project);
}); 



server.listen(3000);