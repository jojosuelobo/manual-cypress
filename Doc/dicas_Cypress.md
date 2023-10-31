## Dicas e boas práticas com Cypress

### Como usar o `.as()` para reutilização e otimização

É possível salvar um campo de certa forma como uma variável para redução de código e reutilização usando a função `as()`

```jsx
it('fills the form and submits it', () => {
  cy.get('#nome').as('name').type('Walmyr')
  cy.get('#sobrenome').as('lastName').type('Filho')
  cy.get('#email').as('email').type('talkingabouttesting@gmail.com')
   
```

usando o `.as()` após identificar o elemento pelo `.get()` podemos atribuir um nome para o campo, e reutilizar o mesmo, seguido por um @

```jsx
it('fills the form and submits it', () => {
  cy.get('#nome').as('name').type('Walmyr')
  cy.get('#sobrenome').as('lastName').type('Filho')
  cy.get('#email').as('email').type('talkingabouttesting@gmail.com')
	cy.get('@name').should('be.empty')
	cy.get('@lastName').should('be.empty')
	cy.get('@email').should('be.empty')
```