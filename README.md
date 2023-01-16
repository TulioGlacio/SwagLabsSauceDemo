This repository contains Cypress end-to-end tests for the Sauce Labs Demo Store website. The tests check various aspects of the website, such as product sorting and user login functionality.

Requirements
1. Node.js
2. Cypress

Installation
1. Clone the repository to your local machine.
2. Install the dependencies by running npm install in the root of the project.
3. Run the tests by running npx cypress open in the root of the project.

Structure
The tests are located in the cypress directory. All tests are to be found in spec.cy.ts file

Configuration
You can configure the tests by editing the cypress.config.js file. This file contains settings such as the base URL of the website and password

Running the tests
You can run the tests by running npx cypress open in the root of the project. This will open the Cypress test runner, where you can select and run individual tests or run all tests at once. 

Alternatively, you can run the tests in the command line by running npx cypress run, then you can run command like this cypress run --env password=secret,firstName=example for determing variables contained in cypress.config.js file.

Note
Please make sure you have the correct credentials to use the website before running the tests, because some tests are related to user login and cart functionality.
