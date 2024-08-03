const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.saucedemo.com',
    viewportWidth:1200,
    viewportHeight:900,
    testIsolation:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
