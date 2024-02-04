/// <reference types="cypress"/>

import locators from "../../support/locators";

describe('Login', () => {
    beforeEach(() =>{
        cy.login('victor.lance@going2.com.br', 'Test123#'); 
     })
     after(() =>{
        cy.resetApp();
     })
     it('Criando conta', () =>{
        cy.acessarMenuContas();
        cy.inserirConta('Conta Refactor');
        cy.get(locators.MESSAGE).should('contain', 'Conta inserida com sucesso!');

     })

     it('alterando conta', () =>{
        cy.acessarMenuContas();
        cy.xpath(locators.CONTAS.XP_BTN_ALTERAR).click();
        cy.get(locators.CONTAS.NOME)
            .clear()
            .type('Conta Sucesso');
        cy.get(locators.CONTAS.BTN_SALVAR).click();
        cy.get(locators.MESSAGE).should('contain', 'Conta atualizada com sucesso!');
     })

     it('Não devo alterar uma conta pro mesmo nome', () =>{
        cy.acessarMenuContas();
        cy.inserirConta('Conta mesmo nome');
        cy.get(locators.MESSAGE).should('contain', 'code 400');

     })

     it('Criando uma transação', () =>{
        cy.get(locators.MENU.MOVIMENTACAO).click();
        cy.get(locators.MOVIMENTACAO.DESCRICAO).type('Deposito inicial');
        cy.get(locators.MOVIMENTACAO.VALOR).type('2346');
        cy.get(locators.MOVIMENTACAO.STATUS).click();
    
        cy.get(locators.MOVIMENTACAO.INTERESSADO).type('Eu mesmo!');
        cy.get(locators.MOVIMENTACAO.BTN_SALVAR).click();
        cy.get(locators.MESSAGE).should('contain', 'Movimentação inserida com sucesso!');
     })

     it.only('Devo ver o saldo', () => {
        cy.get(locators.MENU.HOME).click()
        cy.xpath(locators.SALDO.SALDO_CONTA);
        cy.xpath(locators.SALDO.VALOR).should('contain', '1.500,00');
        
        

    })

    it('Remover transação de conta', () => {
        cy.get(locators.MENU.EXTRATO).click();
        cy.get(locators.EXTRATO.REMOVER_ELEMENTO).click();
        cy.get(locators.MESSAGE).should('contain', 'Movimentação removida com sucesso!');
        
    })

    })
    
   