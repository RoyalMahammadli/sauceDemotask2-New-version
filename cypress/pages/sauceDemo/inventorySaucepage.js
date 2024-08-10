class inventorySaucepage {

  fillUsernameInput(value) {
    cy.get("[data-test='username']").should("have.value", "").type(value);
  }
  fillPasswordInput(value) {
    cy.get("[data-test='password']").should("have.value", "").type(value);
  }
  clickLogin() {
    const btn = cy.get("#login-button");
    btn.click();
  }

  elements = {
    divLabel: () => cy.get(".product_label")
  };
  findProductText() {
    this.elements.divLabel().contains("Products");
    cy.fixture("url").then(siteUrl => {
      cy.checkUrl(siteUrl.inventoryUrl);
    });
    
  }

  selectRandomitem(){
    cy.get(".inventory_list").find(".btn_inventory").then(button => {
        let randomNumber = Math.floor(Math.random() * button.length);
        cy.log(button);
        cy.wrap(button[randomNumber]).click().contains("REMOVE");
      });
}
openShopCart(){
    cy.get("[class='fa-layers-counter shopping_cart_badge']").should("not.have.value",'0').click();
    cy.get(".cart_item").should("exist");
    cy.fixture("url").then(siteUrl => {
        cy.checkUrl(siteUrl.cartHtml);
      });
}

}
export default inventorySaucepage;
