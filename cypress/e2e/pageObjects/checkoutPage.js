export class CheckoutPage {
  getConfirmDetailsButton() {
    return cy.contains("Confirm Details");
  }

  getSubmitButton() {
    return cy.get("button#submitButton");
  }

  getSuccessNotificationMessage() {
    return cy.get('p').contains('Payment accepted, thank you!')
  }

  getDoneButton() {
    return cy.get('button[data-action="application#doneAction"]')
  }

  fillCardDetails(name, zip, number, expiry, cvv) {
    cy.iframe("[id^=hostedform]").find("#card-name").type(name);
    cy.iframe("[id^=hostedform]").find("#card-number").type(number);
    cy.iframe("[id^=hostedform]").find("#card-expiry").type(expiry);
    cy.iframe("[id^=hostedform]").find("#card-security").type(cvv);
    cy.iframe("[id^=hostedform]").find("#card-zip").type(zip);
  }
}
