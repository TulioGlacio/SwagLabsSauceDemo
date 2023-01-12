const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://www.saucedemo.com'
  },
  chromeWebSecurity: false
  env: {
    password : '' // enter password in base64 coding
  }
});
