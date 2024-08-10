import basketCart from "../pages/sauceDemo/basketCart";
import checkOut from "../pages/sauceDemo/checkOut";
import checkOutComplete from "../pages/sauceDemo/checkOutComplete";
import homeSaucePage from "../pages/sauceDemo/homeSaucePage";
import inventorySaucepage from "../pages/sauceDemo/inventorySaucepage";
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/v1/index.html");
    cy.fixture("url").then(siteUrl => {
      cy.checkUrl(siteUrl.mainUrl);
    });
  });
  it("Should log in to site ", () => {
    cy.fixture("userData").then(value => {
      const hsp = new homeSaucePage();
      hsp.fillUsernameInput(value.userName);
      hsp.fillPasswordInput(value.password);
      hsp.clickLogin();
    });
  });
  it("Verify that you are logged in and in the main page", () => {
    cy.fixture("userData").then(value => {
      const isp = new inventorySaucepage();
      isp.fillUsernameInput(value.userName);
      isp.fillPasswordInput(value.password);
      isp.clickLogin();
      isp.findProductText()
    });
  });
  it("Add randomly selected item to the shopping cart",()=>{
    cy.fixture("userData").then(value => {
      const isp = new inventorySaucepage();
      isp.fillUsernameInput(value.userName);
      isp.fillPasswordInput(value.password);
      isp.clickLogin();
      isp.findProductText()
      isp.selectRandomitem()
    });
  })
  it("Open shopping cart",()=>{
    cy.fixture("userData").then(value => {
      const isp = new inventorySaucepage();
      isp.fillUsernameInput(value.userName);
      isp.fillPasswordInput(value.password);
      isp.clickLogin();
      isp.findProductText()
      isp.selectRandomitem()
      isp.openShopCart()
    });
  })
  it("Proceed to Checkout", () => {
    cy.fixture("userData").then(value => {
      const bc = new basketCart();
      bc.fillUsernameInput(value.userName);
      bc.fillPasswordInput(value.password);
      bc.clickLogin();
      bc.findProductText()
      bc.selectRandomitem()
      bc.openShopCart()
      bc.proceedCheckout()
    });
 
  });
  it("Enter crediantials and click", () => {
    cy.fixture("userData").then(value => {
      const ch = new checkOut()
      ch.fillUsernameInput(value.userName);
      ch.fillPasswordInput(value.password);
      ch.clickLogin();
      ch.findProductText()
      ch.selectRandomitem()
      ch.openShopCart()
      ch.proceedCheckout()
      ch.enterCrediantials()
      ch.clickContinue()
      ch.clickFinish()
    });
 
  });
  it.only("complete order and fin complete message", () => {
    cy.fixture("userData").then(value => {
      const coc = new checkOutComplete()
      coc.fillUsernameInput(value.userName);
      coc.fillPasswordInput(value.password);
      coc.clickLogin();
      coc.findProductText()
      coc.selectRandomitem()
      coc.openShopCart()
      coc.proceedCheckout()
      coc.enterCrediantials()
      coc.clickContinue()
      coc.clickFinish()
      coc.findCompleteMessage()
      
    });
 
  });
  
});
