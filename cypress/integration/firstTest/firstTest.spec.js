/// <reference types="Cypress" />

// describe('Mobile phone replenishment', () => {
//
//     context("Replenishment less than the allowed amount", () => {
//         it("Show error: Minimum amount of the replenishment 1 UAH", () => {});
//     });
//
// });

// it('By ID', () => {
//     cy.visit("https://www.facebook.com/")
//     Cypress.Cookies.debug(true, { verbose: false })
//     cy.get('#email')
// });
//
// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get")
//     cy.get('.DocSearch')
// });
//
// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get")
//     cy.get('nav')
// });
//
// it('By Tag Value', () => {
//     cy.visit("http://facebook.com/")
//     cy.get('[name="pass"]')
// });
//
// it('By Different Tag', () => {
//     cy.visit("http://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });
//
// it('By Different Types', () => {
//     cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
//     cy.get('button[type="button"][class="DocSearch DocSearch-Button"]')
// });
//
// it.only('By Contains name', () => {
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// });

it('Using Get with Find and Eq', () => {
    cy.visit("https://next.privat24.ua/deposit/open")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/eq")
    cy.get('div[class="hidden xl:block xl:col-span-2 mt-16 lg:z-10"]').find('nav').find('ul').find('li').find('a').eq(0)
});
