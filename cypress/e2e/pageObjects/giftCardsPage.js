export class GiftCardsPage {
  getPurchaserEmailField() {
    return cy.get('input[data-target="email.purchaserEmailInput"]');
  }

  getPurchaserFirstNameField() {
    return cy.get('input[data-target="name.purchaserFirstNameInput"]');
  }

  getPurchaserLastNameField() {
    return cy.get('input[data-target="name.purchaserLastNameInput"]');
  }

  getRecipientEmailField() {
    return cy.get('input[data-target="email.recipientEmailInput"]');
  }

  getRecipientMessageField() {
    return cy.get('textarea[data-target="email.recipientMessageInput"]');
  }

  getSubmitButton() {
    return cy.get('button[data-target="checkout.checkoutButton"]').eq(0);
  }

  getAmountInputField() {
    return cy.get('input[data-target="amount.otherInput"]');
  }

  getSendToMeTab() {
    return cy.get('a[data-target="tabs.sendToMyselfTab"]');
  }

  getSendToOthersTab() {
    return cy.get('a[data-target="tabs.sendToOtherTab"]');
  }

  getCheckoutPrice() {
    return cy.get('span[data-target="checkout.price"]');
  }

  getPurchaserEmailError() {
    return cy.get('div[data-target="email.purchaserEmailError"]');
  }

  getRecipientEmailError() {
    return cy.get('div[data-target="email.recipientEmailError"]');
  }

  fillSenderForm(email, firstname, lastname) {
    this.getPurchaserEmailField().type(email)
    this.getPurchaserFirstNameField().type(firstname)
    this.getPurchaserLastNameField().type(lastname)
  }

  fillRecipientForm(email, message) {
    this.getRecipientEmailField().type(email)
    this.getRecipientMessageField().type(message)
  }

  selectOption(value) {
    cy.get(`#option${value}`).check()
  }
}
