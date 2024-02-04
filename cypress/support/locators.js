const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU:{
        HOME: '[data-test="menu-home"]',
        SETTINGS: '[data-test="menu-settings"]',
        RESET: '[href="/reset"]',
        CONTAS: '[href="/contas"]',
        EXTRATO: '[data-test="menu-extrato"]',
        MOVIMENTACAO: '[data-test="menu-movimentacao"]'


    },
    CONTAS: {
        NOME:'[data-test="nome"]',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: "(//i[contains(@class,'far fa-edit')])[1]"
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test="descricao"]',
        VALOR: '[data-test="valor"]',
        CONTA: '[data-test="conta"]',
        STATUS: '[data-test="status"]',
        INTERESSADO: '[data-test="envolvido"]',
        BTN_SALVAR: '.btn-primary'
    },
    SALDO: {
        SALDO_CONTA: "//td[contains(.,'Conta com movimentacao')]",
        VALOR: "(//td[contains(.,'-R$ 1.500,00')])[1]"
    },
    EXTRATO: {
        REMOVER_ELEMENTO: ':nth-child(2) > .row > .col > [href="#"] > .far',
        ALTERAR_ELEMENTO: '[href="/movimentacao/1906504"] > .fas'
    },
    MESSAGE: '.toast'
}

export default locators;

