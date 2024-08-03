Cypress.Commands.add("checkUrl",(url)=>{
    cy.url().should('eq',url)
})
Cypress.Commands.add("login", () => {
  cy.fixture("userData").then(data => {
    cy.get("[data-test='username']").invoke('val').should('eq','')
    cy.get("[data-test='username']").type(data.userName);
    cy.get("[data-test='password']").invoke('val').should('eq','')
    cy.get("[data-test='password']").type(`${data.password}{enter}`);
  });
  // -------OR WE CAN PRESS LOGIN BUTTON-------
  // cy.get("#login-button").click()
});
Cypress.Commands.add("selectRandomItem",()=>{
    cy.get(".inventory_list").find(".btn_inventory").then(button => {
        let randomNumber = Math.floor(Math.random() * button.length);
        cy.log(button);
        cy.wrap(button[randomNumber]).click().contains("REMOVE");
      });
})
Cypress.Commands.add("enterUserInfo",()=>{
    cy.fixture("userData").then(data => {
        cy.get("[data-test='firstName']").invoke("val").should("eq", "");
        cy.get("[data-test='firstName']").type(data.firstName);
        cy.get("[data-test='lastName']").invoke("val").should("eq", "");
        cy.get("[data-test='lastName']").type(data.lastName);
        cy.get("[data-test='postalCode']").invoke("val").should("eq", "");
        cy.get("[data-test='postalCode']").type(data.zipCode);
      });
})

