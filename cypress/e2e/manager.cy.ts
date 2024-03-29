import { HelperMethods } from '../util/helper-methods';

const { HomePage } = require('../page/home.po');

describe('Manager', () => {
  beforeEach(function () {
    HelperMethods.testSetup();
  });

  it('Añadir cliente', () => {

    const manager = new HomePage().goBankManagerPage();

    //Completar inputs
    manager.getAddManagerMenuButton().click();
    manager.getFirstNameInput().type('Maria');
    manager.getLastNameInput().type('Fonseca');
    manager.getPostCodeInput().type('30106');
    manager.getAddManagerButton().click();
    //Tiempo
    cy.wait(1000);

    //Tabla Manager
    manager.getManagerMenuButton().click();
    manager.getSearchManagerInput().type('Maria');
    manager.getManagerTableBody().find('tr').should('have.length', 1);
    manager.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    manager.getTableBodyRowCell(1, 2).should('have.text', 'Fonseca');
    manager.getTableBodyRowCell(1, 3).should('have.text', '30106');
    manager.getTableBodyRowCell(1, 4).should('have.text', '');
    manager.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    manager
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');


    

  });
  it('Eliminar cliente', () => {

    const manager = new HomePage().goBankManagerPage();

    //Completar inputs
    manager.getAddManagerMenuButton().click();
    manager.getFirstNameInput().type('Maria');
    manager.getLastNameInput().type('Fonseca');
    manager.getPostCodeInput().type('30106');
    manager.getAddManagerButton().click();
    //Tiempo
    cy.wait(1000);

    //Tabla Manager
    manager.getManagerMenuButton().click();
    manager.getSearchManagerInput().type('Maria');
    manager.getManagerTableBody().find('tr').should('have.length', 1);
    manager.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    manager.getTableBodyRowCell(1, 2).should('have.text', 'Fonseca');
    manager.getTableBodyRowCell(1, 3).should('have.text', '30106');
    manager.getTableBodyRowCell(1, 4).should('have.text', '');
    manager.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    manager
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');
    manager.getDeleteManagerButton().click();
    manager.getSearchManagerInput().clear();
    manager.getSearchManagerInput().type('Maria');
    manager.getManagerTableBody().find('tr').should('have.length', 0);

  });

  it('Aperturar nueva cliente', () => {

    const manager = new HomePage().goBankManagerPage();

    //Completar inputs
    manager.getAddManagerMenuButton().click();
    manager.getFirstNameInput().type('Maria');
    manager.getLastNameInput().type('Fonseca');
    manager.getPostCodeInput().type('30106');
    manager.getAddManagerButton().click();

    //Abrir cuenta
    manager.getOpenAccountMenuButton().click();
    manager.getUserSelect().select(6);
    manager.getCurrencySelect().select(1);
    manager.getProcessButton().click();

    //Tabla
    manager.getManagerMenuButton().click();
    manager.getSearchManagerInput().type('Maria');
    manager.getManagerTableBody().find('tr').should('have.length', 1);
    manager.getTableBodyRowCell(1, 1).should('have.text', 'Maria');
    manager.getTableBodyRowCell(1, 2).should('have.text', 'Fonseca');
    manager.getTableBodyRowCell(1, 3).should('have.text', '30106');
    manager.getTableBodyRowCell(1, 4).should('not.have.text', '');
    manager.getTableBodyRowCell(1, 5).find('button').should('be.visible');
    manager
      .getTableBodyRowCell(1, 5)
      .find('button')
      .should('have.text', 'Delete');
    manager.getDeleteManagerButton().click();
    manager.getSearchManagerInput().clear();
    manager.getSearchManagerInput().type('Maria');
    manager.getManagerTableBody().find('tr').should('have.length', 0);


  });

  it('Buscar por apellido', () => {
    const manager = new HomePage().goBankManagerPage();

    // assert
    manager.getManagerMenuButton().click();
    manager.getSearchManagerInput().type('Neville');
    cy.wait(1000);
    manager.getSearchManagerInput().clear();
    manager.getSearchManagerInput().type('Longbottom');
    cy.wait(1000);
    manager.getManagerTableBody().find('tr').should('have.length', 1);
    manager.getTableBodyRowCell(1, 1).should('have.text', 'Neville');
    manager.getTableBodyRowCell(1, 2).should('have.text', 'Longbottom');
    manager.getHomeButton().click();
  });

  

});
