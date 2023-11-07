/// <reference types="Cypress" />

/**
 * Como um usuário do Gitlab
 * Quero realizar o Login
 * Para acessar o serviço
 */

describe('Login', () => {
  const user = Cypress.env('user_name')
  const password = Cypress.env('user_password')
  const options = { cacheSession: false }
  
  context('Dado que inseri credenciais válidas', () => {
    it('Então o Login será executado com sucesso', () => {
      cy.login(user, password, options)

      cy.get('.qa-user-avatar').should('be.visible')
    })
  });

  context('Dado que inseri Senha incorreta', () => {
    it('Então uma mensagem de erro será exibida e meu login não será feito', () => {
      cy.login('root', 'SenhaIncorreta', options)

      cy.contains('Invalid Login or password.').should('be.visible')
      cy.get("[data-qa-selector='password_field']").should('be.empty')
    });
  })

  context('Dado que inseri credencial incorreta', () => {
    it('Então uma mensagem de erro será exibida e meu login não será feito', () => {
      cy.login('UserInválido', 'SenhaIncorreta', options)

      cy.contains('Invalid Login or password.').should('be.visible')
      cy.get("[data-qa-selector='password_field']").should('be.empty')
    });
  })


})
