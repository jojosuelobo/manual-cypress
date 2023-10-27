/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

describe('Create Project', () => {
    const issue = {
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        },
        name: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(5)
    }

    beforeEach(() => {
        cy.login()

        cy.api_deleteProjects()
        cy.api_createProject(issue.project)
    })

    it('successfully', () => {
        cy.gui_createIssue(issue)
        cy.get('.issue-details')
            .should('contain', issue.name)
            .and('contain', issue.description)

        // Parte que fiz
        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${issue.project.name}/issues/1`)
        cy.contains(issue.name).should('be.visible')
        cy.contains(issue.description).should('be.visible')

    });

})