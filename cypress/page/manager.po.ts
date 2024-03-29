export class ManagerPage {
  public getHomeButton() {
    return cy.get(".home");
  }

  public getAddManagerMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(1)");
  }

  public getFirstNameInput() {
    return cy.get(":nth-child(1) > .form-control");
  }

  public getLastNameInput() {
    return cy.get(":nth-child(2) > .form-control");
  }

  public getPostCodeInput() {
    return cy.get(":nth-child(3) > .form-control");
  }

  public getAddManagerButton() {
    return cy.get("form.ng-dirty > .btn");
  }

  public getManagerMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(3)");
  }

  public getSearchManagerInput() {
    return cy.get(".form-group > .input-group > .form-control");
  }

  public getManagerTableBody() {
    return cy.get(".table > tbody");
  }

  public getDeleteManagerButton() {
    return cy.get(":nth-child(5) > button");
  }
  public getUserSelect() {
    return cy.get("#userSelect");
  }

  public getOpenAccountMenuButton() {
    return cy.get(".border > .center:nth-child(1) > .btn:nth-child(2)");
  }

  public getCurrencySelect() {
    return cy.get("#currency");
  }

  public getProcessButton() {
    return cy.get("[type=submit]");
  }

  public getCurrency() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(3)");
  }

  public getCurrencyValueLabel() {
    return cy.get(".borderM > :nth-child(3) > :nth-child(3)");
  }
  public getTableBodyRowCell(rowIndex, cellIndex) {
    return cy.get(
      `.table > tbody > tr:nth-child(${rowIndex}) > td:nth-child(${cellIndex})`
    );
  }
}
