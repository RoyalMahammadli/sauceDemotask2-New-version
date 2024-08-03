describe("template spec", () => {
  it("Navigate to the Website", () => {
    cy.visit("/v1/index.html");
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.mainUrl);
    });
  });

  it("Login ", () => {
    cy.login();
  });

  it("Verify Main Page", () => {
    cy.log(cy.contains("Products"));
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.inventoryUrl);
    });
  });

  it("Add randomly selected item to the shopping cart", () => {
    cy.selectRandomItem();
  });

  it("Open Shopping Cart", () => {
    cy.get("[class='fa-layers-counter shopping_cart_badge']").click();
    cy.get(".cart_item").should("exist");
  });

  it("Proceed to Checkout", () => {
    cy.get(".btn_action.checkout_button").click();
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.checkoutUrl);
    });
    cy.get("[class='btn_primary cart_button']").click();
    cy.get("[data-test='error']").should("contain", "First Name is required");
  });

  it("Enter User Info", () => {
    cy.enterUserInfo();
  });

  it("Continue Checkout", () => {
    cy.get("[class='btn_primary cart_button']").click();
  });

  it("Complete Order", () => {
    cy.get("[class='btn_action cart_button']").click();
  });
  
  it("Verify Order Success", () => {
    cy.contains("THANK YOU FOR YOUR ORDER");
    cy.fixture("url").then(urlLink => {
      cy.checkUrl(urlLink.completeUrl);
    });
  });
});
