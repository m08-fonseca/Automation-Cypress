import { ClientPage } from "./client.po";
import { ManagerPage } from "./manager.po";

export class HomePage{
    public getHomeButton() {
        return cy.get(".home");
      }
    
      public goToClientPage() {
        cy.get(".borderM > :nth-child(1) > .btn").click();
        return new ClientPage();
      }
    
      public goBankManagerPage() {
        cy.get(":nth-child(3) > .btn").click();
        return new ManagerPage();
    }
}