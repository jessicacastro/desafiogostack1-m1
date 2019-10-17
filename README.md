# :new_moon: Desafio Go Stack 
## Primeiro desafio - Módulo 1 

##### :pencil2: SOBRE O DESAFIO:

desafio da turma Go Stack 9 da Rocketseat. Consiste em uma API para adição, edição, visualização e remoção de projetos e suas tarefas, do zero. Não há conexão com banco de dados. 

###### :pushpin: MÉTODOS UTILIZADOS (HTTP), DESCRIÇÃO E ROTAS:
- [x] Listar todos os projetos
```
server.get('/projects');
```

- [x] Listar apenas um projeto
```
server.get('/projects/:id');
```

- [x] Criar um projeto
```
server.post('/projects');
```

- [x] Editar o title de um projeto
```
server.put('/projects/:id');
```

- [x] Excluir um projeto
```
server.delete('/projects/:id');
```

- [x] Adicionar uma tarefa no projeto
```
server.post('/projects/:id/tasks');
```

###### :mag: Tecnologias utilizadas: 

- Yarn
- Nodemon
- Express
- Node.js

Feito com :hearts: by Jessica Castro 

Me visite no [Linkedin](https://www.linkedin.com/in/jessica-castro-7a12b67a/)
