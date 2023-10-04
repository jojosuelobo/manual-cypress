/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
  beforeEach(() => {
    cy.visit('../../src/index.html');
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('Preenche campos obrigatórios e envia formulário', function () {
    const lorem = 'LONG TEXT lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
    cy.get('[id="firstName"]').as('nome').type('Josue')
    cy.get('[id="lastName"]').as('sobrenome').type('Lobo')
    cy.get('[id="email"]').as('email').type('josuelobo@email.com')
    cy.get('[id="open-text-area"]').as('text').type(lorem, { delay: 0 })
    cy.get('[type="submit"]').click()

    cy.get('.success').should('be.visible')
    cy.contains('strong', 'Mensagem enviada com sucesso.')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function () {
    cy.get('[id="email"]')
      .as('email')
      .type('josuelobo')

    cy.contains('button', 'Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('Valida campo de telefone', () => {
    cy.get('#phone')
      .type('abcdefg')
      .should('have.value', '')
  });

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('[id="firstName"]').type('Josue')
    cy.get('[id="lastName"]').type('Lobo')
    cy.get('[id="email"]').type('josuelobo@email.com')
    cy.get('#phone-checkbox').click()
    cy.get('[id="open-text-area"]').as('text').type('lorem')
    cy.get('[type="submit"]').click()
    cy.get('.error').should('be.visible')
  });

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.reload()
    cy.get('[type="submit"]').click()
    cy.get('.error').should('be.visible')
  });

  it('envia o formuário com sucesso usando um comando customizado', () => {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  });
})
