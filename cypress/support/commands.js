// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import locators from "./locators";

Cypress.Commands.add('login', (email, password) =>{
    cy.reload();
         cy.visit('https://barrigareact.wcaquino.me/');
         cy.get(locators.LOGIN.USER).type('victor.lance@going2.com.br')
         cy.get(locators.LOGIN.PASSWORD).type('Test123#')
         cy.get(locators.LOGIN.BTN_LOGIN).click()
         cy.get(locators.MESSAGE).should('exist')
})

//COMANDOS PARA CONTAS  

Cypress.Commands.add('acessarMenuContas' ,()=>{
    cy.get(locators.MENU.SETTINGS).click();
    cy.get(locators.MENU.CONTAS).click();
})

Cypress.Commands.add('resetApp', () => {
    cy.get(locators.MENU.SETTINGS).click()
    cy.get(locators.MENU.RESET).click()
})

Cypress.Commands.add('inserirConta' ,(conta) =>{
    cy.get(locators.CONTAS.NOME).type(conta);
    cy.get(locators.CONTAS.BTN_SALVAR).click();
})