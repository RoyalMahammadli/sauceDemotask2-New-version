class homeSaucePage {
  //------------------------1 Example-----------------------------------
  //   elements = {
  //     usernameInput: () => cy.get("[data-test='username']"),
  //     passwordInput: () => cy.get("[data-test='password']"),
  //     loginBtn: () => cy.get("#login-button")
  //   };
  //   typeUsername(username) {
  //     this.elements.usernameInput().type(username);
  //   }
  //   typePassword(password) {
  //     this.elements.passwordInput().type(password);
  //   }
  //   clickLogin() {
  //     this.elements.loginBtn().click();
  //   }
  //----------------------------------------------------------


  //--------------------2 Example-------------------------------
  //   getUsernameInput() {
  //     return cy.get("[data-test='username']");
  //   }
  //   getPasswordInput() {
  //     return cy.get("[data-test='password']");
  //   }
  //   getLoginBtn() {
  //     return cy.get("#login-button");
  //   }

  //  fillUsername(value){
  //     this.getUsernameInput().type(value)
  //  }
  //-------------------------------------------------------------------


  //------------------3 Example-------------------------------------
//   fillUsernameInput(value) {
//     const field = cy.get("[data-test='username']");
//     field.should("have.value",'')
//     field.clear();
//     field.type(value);
//     return this
//   }
//   fillPasswordInput(value){
//     const field=cy.get("[data-test='password']")
//     // field.invoke("val").should('eq','')  alinmir
//     field.should('have.value','')  
//     field.clear()
//     field.type(value)
//     return this
//   }
//   clickLogin(){
//     const btn=cy.get("#login-button")
//     btn.click()
   
//   }


  //----------------------------4 Example---------------------------
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
}
export default homeSaucePage;
