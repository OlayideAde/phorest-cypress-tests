# Phorest-cypress-tests

This repo contains UI e2e test scripts for the gift cards/voucher purchase feature on Phorest demo salon site using cypress framework.


## Run tests locally
### Setup
1. Clone the repo locally with command `git clone git@github.com:OlayideAde/phorest-cypress-tests.git`
2. Install NPM dependencies by running `npm i`
3. Access the `cypress.env.json` file in the root of the project's directory and replace the `sender_email` and `recipient_email` values with the email addresses where you would like to receive the receipts/payment confirmation emails from the test runs.
4. Run tests locally with this command `npm run cypress-test`
5. Open cypress runner with this command `npm run cy:open`

## Run on Git
You can run tests in this project using github actions.
1. Open the [project repo](https://github.com/OlayideAde/phorest-cypress-tests) on github
2. Access the [`Actions`](https://github.com/OlayideAde/phorest-cypress-tests/actions) tab of this repositiory on github
3. On the left menu, select the `cypress headless browser tests` workflow and then click the  `Run workflow` button
