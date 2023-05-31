const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // set timeouts so MailSlurp can wait for emails and sms
  env: {
    "MAILSLURP_API_KEY": "aaaeda85afa2e95abb7ad8a241915981a5363320bb3b7233c046d87eb3312f25"
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
    },
    // examples run against the playground app
    baseUrl: 'https://playground.mailslurp.com',
    // these examples require no test isolation
    testIsolation: false,
    defaultCommandTimeout: 40000,
    responseTimeout: 40000,
    requestTimeout: 40000,
  },
})