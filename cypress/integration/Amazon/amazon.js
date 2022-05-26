import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://www.amazon.com/'
Given('I open Amazon page', () => {
    cy.visit(url)
})
Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})

