<p align="center">
  <a>
    <img src="./Doc/images/logoCypressLit.png" alt="Logo Cypress" height="150" width="150">
  </a>
  <h1 align="center">Manual Cypress</h1>
</p>

### 🎯 Guia de documentação pessoal para o uso da ferramenta Cypress 

> Este repositório tem o intuito de salvar e documentar de forma simples projetos e códigos em Cypress, sinta-se livre para consultar e contribuir com o projeto 

### 🚨 Colabore

- Abra Pull Requests com atualizações
- Discuta ideias em Issues
- Compartilhe o repositório com a sua comunidade

### [Anotações dos cursos](./doc/cypressTAT_Documentation.md) de Automação com Cypress 
> Anotações feitas dos cursos de automação e testes em Cypress do [Walmyr Filho - Talking About Testing](https://github.com/wlsf82)

# Cypress

### Definição

O [Cypress.io](http://cypress.io/) é um framework de testes automatizados end-to-end usando JavaScript! Para seu uso, é necessário a [~~instalação do Node e npm.~~]() 


### Como criar um projeto em Cypress

##### 1. Criar arquivo Package.json
```markdown
npm init --yes
```

##### 2. Instalar sua dependência
```markdown
npm install -D cypress
```

Caso queria uma versão específica, basta adicionar a versão, exempo: `npm i cypress@4.1` Após sua instalação, é possivel usar o comando `npx cypress open` para abrir o dashboard de testes, e o comando `npx cypress run` para executar o relatório de testes.

💡Adicione o codigo nos arquivos ```cy.js``` para ativar os **auto completes** dos códigos padrões 
```js
/// <reference types="cypress" />
```

### [~~Ferramentas de report do Cypress~~]()
Existem outras ferramentas e pacotes que auxiliam em relatórios de testes, que podem ser executadas junto ao cypress. Dentra elas:
* [Mochawesome](./Doc/doc_report/mochawesome.md)

### [.gitignore para o Cypress](./Doc/gitignore_cypress.md)
Padrão de `.gitignore` para projetos com `cypress`

### [~~Entrega contínua com Cypress~~]()
- Modelo de integração [Github](./Doc/doc_ci/github.md)
- Modelo `yml` para [bitbucket](./Doc/doc_ci/bitbucket.md)



