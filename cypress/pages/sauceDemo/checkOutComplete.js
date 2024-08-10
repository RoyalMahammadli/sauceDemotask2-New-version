class checkOutComplete {
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

  selectRandomitem() {
    cy.get(".inventory_list").find(".btn_inventory").then(button => {
      let randomNumber = Math.floor(Math.random() * button.length);
      cy.log(button);
      cy.wrap(button[randomNumber]).click().contains("REMOVE");
    });
  }
  openShopCart() {
    cy
      .get("[class='fa-layers-counter shopping_cart_badge']")
      .should("not.have.value", "0")
      .click();
    cy.get(".cart_item").should("exist");
    cy.fixture("url").then(siteUrl => {
      cy.checkUrl(siteUrl.cartHtml);
    });
  }
  proceedCheckout() {
    cy.get(".btn_action.checkout_button").click();
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.checkoutUrl);
    });
    cy.get("[class='btn_primary cart_button']").click();
    cy.get("[data-test='error']").should("contain", "First Name is required");
  }

  enterCrediantials() {
    cy.fixture("userData").then(data => {
      cy.get("[data-test='firstName']").invoke("val").should("eq", "");
      cy.get("[data-test='firstName']").type(data.firstName);
      cy.get("[data-test='lastName']").invoke("val").should("eq", "");
      cy.get("[data-test='lastName']").type(data.lastName);
      cy.get("[data-test='postalCode']").invoke("val").should("eq", "");
      cy.get("[data-test='postalCode']").type(`${data.zipCode} {enter}`);
    });
  }
  clickContinue() {
    cy.get("[class='btn_primary cart_button']").click();
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.checkoutUrl2);
    });
  }
  clickFinish() {
    cy.get("[class='btn_action cart_button']").click();
  }
  findCompleteMessage() {
    cy.contains("THANK YOU FOR YOUR ORDER");
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.completeUrl);
    });
  }
}
export default checkOutComplete;
