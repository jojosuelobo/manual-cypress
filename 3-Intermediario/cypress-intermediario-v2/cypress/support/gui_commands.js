Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  password = Cypress.env('user_password'),
  { cacheSession = true } = {},
) => {
  const login = () => {
    cy.visit('/users/sign_in')

    cy.get("[data-qa-selector='login_field']").type(user)
    cy.get("[data-qa-selector='password_field']").type(password, { log: false })
    cy.get("[data-qa-selector='sign_in_button']").click()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate,
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('logout', () => {
  const logout = () => {
    cy.visit('/')

    cy.get('.qa-user-avatar').click()
    cy.get('[data-qa-selector="sign_out_link"]').click()
  }

  logout()
})

Cypress.Commands.add('gui_createProject', project => {
  cy.visit('/projects/new')

  cy.get('#project_name').type(project.name)
  cy.get('#project_description').type(project.description)
  cy.get('.qa-initialize-with-readme-checkbox').check()
  cy.contains('Create project').click()
})

Cypress.Commands.add('gui_createIssue', issue => {
  cy.visit(`/root/${issue.project.name}/issues/new`)

  cy.get('#issue_title').type(issue.name)
  cy.get('#issue_description').type(issue.description)
  cy.get('input[type="submit"]').should('not.be.disabled').click()

})

Cypress.Commands.add('gui_createLabel', label => {
  cy.visit(`http://localhost/root/${label.issue.project.name}/-/labels/new`)

  cy.get('#label_title').type(label.title)
  cy.get('#label_description').type(label.description)
  cy.get('#label_color').type(`{selectAll}${label.color}`)
  cy.contains('Create label').click()
})

Cypress.Commands.add('gui_setLabelOnIssue', label => {
  cy.get('.qa-edit-link-labels').click()
  cy.contains(label.name).click()
  cy.get('body').click()
})