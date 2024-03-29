export class ClientPage{
    public getHomeButton() {
        return cy.get(".home");
    }

    public getClientButton() {
        return cy.get('.borderM > :nth-child(1)');
    }

    public getUserSelect(){
        return cy.get('#userSelect');
    }

    public getUserSelectButton() {
        return cy.get('form.ng-valid > .btn');
    }

    public getAccountSelect() {
        return cy.get("#accountSelect");
    }

    // Mensaje de bienvenida

    public getWelcomeMessage(){
        return cy.get('.fontBig');
    }

    //Balance

    public getBalance() {
        return cy.get(".borderM > :nth-child(3) > :nth-child(2)");
    }

    public getBalanceAmount() {
        return cy.get(".borderM > :nth-child(3) > :nth-child(2)");
    }

    //Transactions

    public getMenuTransactionButton() {
        return cy.get(".borderM > .center:nth-child(5) > .btn:nth-child(1)");
    }

    public getTransactionsStartDate() {
        return cy.get("#start");
    }

    // Table
    public getTransactionsTableBody() {
        return cy.get(".table > tbody");
    }

    public getTableBodyCell(rowIndex, cellIndex) {
        return cy.get(
          `.table > tbody > tr:nth-child(${rowIndex}) > td:nth-child(${cellIndex})`
        );
    }

    public getBackButton() {
        return cy.get('.fixedTopBox > [style="float:left"]');
    }

    // Deposited

    public getDepositButton(){
        return cy.get('[ng-class="btnClass2"]');
    }

    public getAccount(){
        return cy.get('.form-control');
    }

    public getDepositButtonAccount(){
        return cy.get(".btn-default");
    }

    //Message
    public getDepositSuccesful() {
        return cy.get(".error");
    }

   
    // Withdrawn

    public getWithdrawnMenu(){
        return cy.get(".borderM > .center:nth-child(5) > .btn:nth-child(3)");
    }

    public getWithdrawnButton(){
        return cy.get(".btn-default");
    }

    //Reset

    public getResetButton() {
        return cy.get('[style="float:right;margin-top:-30px;"]');
    }

    //Logout

    public getLogoutButton() {
        return cy.get(".logout");
    }

    //Label

    public getCustomerNameLabel() {
        return cy.get("label");
    }
}