Cypress.Commands.add("checkUrl",(url)=>{
    cy.url().should('eq',url)
})
Cypress.Commands.add("logIn",()=>{})

Cypress.Commands.add("selectRandomItem",()=>{
    cy.get(".inventory_list").find(".btn_inventory").then(button => {
        let randomNumber = Math.floor(Math.random() * button.length);
        cy.log(button);
        cy.wrap(button[randomNumber]).click().contains("REMOVE");
      });
})


