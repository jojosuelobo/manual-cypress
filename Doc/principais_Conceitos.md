## Principais Conceitos

### Criação de funções globais

```jsx
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('[formcontrolname=userName]').type(nome)
    cy.get('[formcontrolname=password]').type(senha)
    cy.contains('button', 'login').click()
})
```

Após isso, é feito a importação do arquivo que está alocada 

```jsx
import './commands'
```

Pronto! Agora é só chamar no código, exemplo: `cy.login('josue123', '12345')`

### Importar arquivos JSON

```json
{
    "username": "flavio",
    "password": "123"
}
```

Agora é só importar no código pelo diretório e usa-los ao seu gosto.

```jsx
const usuarioValido = require('../../fixtures/users.json')
cy.login(usuarioValido.username, usuarioValido.password)
```

### Melhores formas de dar Target num componente

| cy.get('button').click() | Nunca! | Péssimo! Muito genérico |
| --- | --- | --- |
| cy.get('.btn.btn-large').click() | Nunca! | Ruim! Muito possível de quebrar em futuras alterações |
| cy.get('#main').click() | Talvez… | Melhor.. Porém há formas mais elegantes sem necessitar usar os listeners do JS |
| cy.get('[name="submission"]').click() | Talvez… | Coupled to the name attribute which has HTML semantics. |
| cy.contains('Submit').click() | Depende | Bem melhor, porém, ainda subjetivo a quebrar em futuras mudanças |
| cy.get('[data-cy="submit"]').click() | Correta! | Perfeito! Isolado de qualquer alteração no sistema |
| cy.get('input[name="devweb"][value="fullstack"]').check() | Correta! | Forma mais bem elaborada para checar uma lista de inputs |