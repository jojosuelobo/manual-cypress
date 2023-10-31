🚧 Em andamento para construção do ReadMe 🚧

### [Anotações dos cursos](./Doc/cypressTAT_Documentation.md) de Automação com Cypress 
Anotações feitas dos cursos de automação e testes em Cypress do [Walmyr Filho - Talking About Testing](https://github.com/wlsf82)

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

### [~~Ferramentas de report do Cypress~~]()
Existem outras ferramentas e pacotes que auxiliam em relatórios de testes, que podem ser executadas junto ao cypress.

### [.gitignore para o Cypress](./Doc/gitignore_cypress.md)
Padrão de `.gitignore` para projetos com `cypress`

### Como fazer uma entrega contínua com Cypress
- Modelo de integração [~~Github~~]()
- Modelo `yml` para [bitbucket](./Doc/bitbucket.md)


### Estrutura de código
```js
/* Habilita o auto complete do Cypress */
/// <reference types="cypress" />

/* Funciona como o 'Main' do código, dentro dele que estarão todos os testes referentes
a descrição da mesma, exemplo: Fluxo de registro de novo usuário */
describe('TELA DE REGISTRO DE NOVO USUÁRIO', () => {
/* Significa que irá executar está instrução antes de cada caso de teste */
	beforeEach(() => {
            cy.visit('https://www.site.com.br') // Entrar na URL do site
	    cy.contains('Registrar-se').click() // Clicar em registrar-se
	})
	
/* Um sub 'Main', onde os testes deste contexto especificos são feitos*/
	context('Registro de usuário inválido' , () => {
		/* Teste em si deste caso em especifico */
		it('Verifica ap-vmessages', () => { 
			[...]
		})

		it('Checa mensagens de erro de input Email', () => { 
			[...]
		})

		[...]
	})

	context('Registro de usuário VÁLIDO' , () => {
		/* Teste em si deste caso em especifico */
		it('Cadastro de usuário', () => { 
			[...]
		})
	})
	
})
```

### [Principais Conceitos](./Doc/principais_Conceitos.md)
Conceitos básicos para o uso do Cypress.
- Criação de funções globais
- Importar arquivos JSON (Ou variáveis globais)
- Dicas de Tag de um component

### [Estruturas padrões com Cypress](./Doc/estruturas_Padrao.md)

- Checar alert de uma página
- Como fazer uma requisição WEB

### [Dicas e boas práticas com Cypress](./Doc/dicas_Cypress.md)

- Como usar o `.as()` para reutilização e otimização


