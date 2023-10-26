/// <reference types="Cypress" />

/**
 * Como um usuário do Gitlab
 * Quero realizar o Login
 * Para acessar o serviço
 */

describe('Login', () => {
  context('Dado que inseri credenciais válidas', () => {
    it('Então o Login será executado com sucesso', () => {
      cy.login()

      cy.get('.qa-user-avatar').should('be.visible')
    })
  });

  context('Dado que inseri Senha incorreta', () => {
    it('Então uma mensagem de erro será exibida e meu login não será feito', () => {
      cy.login('root', 'SenhaIncorreta')

      cy.contains('Invalid Login or password.').should('be.visible')
      cy.get("[data-qa-selector='password_field']").should('be.empty')
    });
  })

  context('Dado que inseri credencial incorreta', () => {
    it('Então uma mensagem de erro será exibida e meu login não será feito', () => {
      cy.login('UserInválido', 'SenhaIncorreta')

      cy.contains('Invalid Login or password.').should('be.visible')
      cy.get("[data-qa-selector='password_field']").should('be.empty')
    });
  })
  

})
