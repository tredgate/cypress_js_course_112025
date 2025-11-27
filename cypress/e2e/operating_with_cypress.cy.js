// cypress/e2e/
// operating_with_cypress.cy.js

describe("Používání Cypress Testů", () => {
  it("Přihlášení a odhlášení z Pmtoolu", () => {
    cy.visit("https://tredgate.com/pmtool/");
    cy.get("#username").type("cypress_zima_2024");
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click();
    // Ověření, že je zobrazené logo a je správný vítací text
    cy.get("#welcome-page-header").should(
      "have.text",
      "Vítej v testovací aplikaci Tredgate Project"
    );
    cy.get(".logo a").should("be.visible");
    cy.get("#user_dropdown").click();
    cy.get("#logout").click();
  });
});
