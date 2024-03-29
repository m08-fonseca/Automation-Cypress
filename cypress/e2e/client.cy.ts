import { HelperMethods } from '../util/helper-methods';

const moment = require('moment');

const { HomePage } = require('../page/home.po');

describe('Client', () => {
  beforeEach(function () {
    HelperMethods.testSetup();
  });
  it('Validación del Depósito', () => {

    //Tabla de fechas
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');
    const currentFormattedDate = moment().format('MMM DD, YYYY');
    
    //Home
    const clientPage = new HomePage().goToClientPage();
    
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();

    //Seleccionar cuenta
    clientPage.getAccountSelect().select(0);
    clientPage.getBalance().should('be.visible');
    clientPage.getBalanceAmount().should('have.text', '0');

    //Transaccion
    clientPage.getMenuTransactionButton().click();
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
    clientPage.getBackButton().click();

    //Deposited
    clientPage.getDepositButton().click();
    clientPage.getAccount().type(1500);
    clientPage.getDepositButtonAccount().click();

    //Message
    clientPage
      .getDepositSuccesful()
      .should('have.text', 'Deposit Successful');
    
    //Balance
    clientPage.getBalanceAmount().should('have.text', '1500');

    //Tiempo
    cy.wait(1000);

    //Transaction
    clientPage.getMenuTransactionButton().click();
    clientPage.getTableBodyCell(1,1).should('contain.text', currentFormattedDate);
    clientPage.getTableBodyCell(1,2).should('have.text', 1500);
    clientPage.getTableBodyCell(1,3).should('have.text', 'Credit');
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 1);
    clientPage.getTransactionsStartDate().type(currentDate);
    
    //Tiempo
    cy.wait(1000);
    clientPage.getBackButton().click();

   
  });

  it('Validación del retiro del depósito', () => {


    //Tabla de fechas
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');
    const currentFormattedDate = moment().format('MMM DD, YYYY');
     
    //Home
    const clientPage = new HomePage().goToClientPage();
     
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();
 
    //Seleccionar cuenta
    clientPage.getAccountSelect().select(0);
    clientPage.getBalance().should('be.visible');
    clientPage.getBalanceAmount().should('have.text', '0');
 
    //Transaccion
    clientPage.getMenuTransactionButton().click();
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
    clientPage.getBackButton().click();
 
     //Deposited
    clientPage.getDepositButton().click();
    clientPage.getAccount().type(1500);
    clientPage.getDepositButtonAccount().click();
 
    //Message
    clientPage
    .getDepositSuccesful()
    .should('have.text', 'Deposit Successful');
     
    //Balance
    clientPage.getBalanceAmount().should('have.text', '1500');
 
    //Tiempo
    cy.wait(1000);
 
    //Transaction
    clientPage.getMenuTransactionButton().click();
    clientPage.getTableBodyCell(1,1).should('contain.text', currentFormattedDate);
    clientPage.getTableBodyCell(1,2).should('have.text', 1500);
    clientPage.getTableBodyCell(1,3).should('have.text', 'Credit');
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 1);
      clientPage.getTransactionsStartDate().type(currentDate);

     //Tiempo
    cy.wait(1000);
    clientPage.getBackButton().click();
 
  
    // Withdrawn

    clientPage.getWithdrawnMenu().click();
    clientPage.getAccount().type(100);
    clientPage.getWithdrawnButton().click();

    //Message
    clientPage
      .getDepositSuccesful()
      .should('have.text', 'Transaction successful');

    clientPage.getBalanceAmount().should('have.text', '1400');

    //Tiempo
    cy.wait(1000);

    //Transaction
    clientPage.getMenuTransactionButton().click();
    clientPage.getTableBodyCell(2,1).should('contain.text', currentFormattedDate);
    clientPage.getTableBodyCell(2,2).should('have.text', 100);
    clientPage.getTableBodyCell(2,3).should('have.text', 'Debit');
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 2);

  });

  it('Validación reset', () => {
    

    //Tabla de fechas
    const currentDate = moment().format('YYYY-MM-DDTHH:mm');
    const currentFormattedDate = moment().format('MMM DD, YYYY');
     
    //Home
    const clientPage = new HomePage().goToClientPage();
     
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();
 
    //Seleccionar cuenta
    clientPage.getAccountSelect().select(0);
    clientPage.getBalance().should('be.visible');
    clientPage.getBalanceAmount().should('have.text', '0');
 
    //Transaccion
    clientPage.getMenuTransactionButton().click();
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);
    clientPage.getBackButton().click();
 
     //Deposited
    clientPage.getDepositButton().click();
    clientPage.getAccount().type(1500);
    clientPage.getDepositButtonAccount().click();
 
    //Message
    clientPage
    .getDepositSuccesful()
    .should('have.text', 'Deposit Successful');
     
    //Balance
    clientPage.getBalanceAmount().should('have.text', '1500');
 
    //Tiempo
    cy.wait(1000);
 
    //Transaction
    clientPage.getMenuTransactionButton().click();
    clientPage.getTableBodyCell(1,1).should('contain.text', currentFormattedDate);
    clientPage.getTableBodyCell(1,2).should('have.text', 1500);
    clientPage.getTableBodyCell(1,3).should('have.text', 'Credit');
     
     //Tiempo
    cy.wait(1000);
    clientPage.getBackButton().click();
 
  
    // Withdrawn

    clientPage.getWithdrawnMenu().click();
    clientPage.getAccount().type(100);
    clientPage.getWithdrawnButton().click();

    //Message
    clientPage
      .getDepositSuccesful()
      .should('have.text', 'Transaction successful');

    clientPage.getBalanceAmount().should('have.text', '1400');

    //Tiempo
    cy.wait(1000);

    //Transaction
    clientPage.getMenuTransactionButton().click();
    clientPage.getTableBodyCell(2,1).should('contain.text', currentFormattedDate);
    clientPage.getTableBodyCell(2,2).should('have.text', 100);
    clientPage.getTableBodyCell(2,3).should('have.text', 'Debit');

    //Reset
    clientPage.getResetButton().click();
    clientPage
      .getTransactionsTableBody()
      .find('tr')
      .should('have.length', 0);

  });

  it('Validación logout', () => {
    //Home
    const clientPage = new HomePage().goToClientPage();
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();
    clientPage.getWelcomeMessage().should('have.text', 'Neville Longbottom');
    clientPage.getLogoutButton().click();
    clientPage.getCustomerNameLabel().should('have.text', 'Your Name :');
    clientPage.getHomeButton().click();

  });

  it('Validación logout label', () => {
    //Home
    const clientPage = new HomePage().goToClientPage();
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();
    clientPage.getLogoutButton().click();
    clientPage.getCustomerNameLabel().should('have.text', 'Your Name :');
    clientPage.getHomeButton().click();

  });

  //Escenario Negativo

  it('Validación del mensaje de error en depósito', () => {

    //Home
    const clientPage = new HomePage().goToClientPage();
    
    //login 
    clientPage.getClientButton().click();
    clientPage.getUserSelect().select(5);
    clientPage.getUserSelectButton().click();

    //Seleccionar cuenta
    clientPage.getAccountSelect().select(0);
    clientPage.getBalance().should('be.visible');
    clientPage.getBalanceAmount().should('have.text', '0');

    // Withdrawn

    clientPage.getWithdrawnMenu().click();
    clientPage.getAccount().type(100);
    clientPage.getWithdrawnButton().click();

    //Message
    clientPage
      .getDepositSuccesful()
      .should('have.text', 'Transaction Failed. You can not withdraw amount more than the balance.');
    
    
  });

  
});