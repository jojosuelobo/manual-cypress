/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'

describe('Create Label', () => {
    const label = {
        title: `label-${faker.random.word()}`,
        description: faker.random.words(5),
        color: faker.color.rgb({ prefix: '#' }),
        issue: {
            title: `issue-${faker.datatype.uuid()}`,
            description: faker.random.words(3),
            project: {
                name: `project-${faker.datatype.uuid()}`,
                description: faker.random.words(5)
            }
        }
    }

    beforeEach(() => {
        cy.api_deleteProjects()
        cy.login()

        cy.api_createIssue(label.issue)
    })

    it('successfully', () => {
        cy.gui_createLabel(label)

        cy.get('.labels-container').should('contain', label.title)
    });
})