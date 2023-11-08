export class GiftCardsPage {
    getPurchaserEmailField() {
        return cy.get('input[data-target="email.purchaserEmailInput"]')
    }

    getPurchaserFirstNameField() {
        return cy.get('input[data-target="name.purchaserFirstNameInput"]')
    }

    getPurchaserLastNameField() {
        return cy.get('input[data-target="name.purchaserLastNameInput"]')
    }

    getRecipientEmailField() {
        return cy.get('input[data-target="email.recipientEmailInput"]')
    }

    getRecipientMessageField() {
        return cy.get('textarea[data-target="email.recipientMessageInput"]')
    }

    getFirstAmountOption() {
        return cy.get('#option50')
    }

    getSecondAmountOption() {
        return cy.get('#option100')
    }

    getThirdAmountOption() {
        return cy.get('#option150')
    }

    geFourthAmountOption() {
        return cy.get('#optionOther')
    }

    getSubmitButton() {
        return cy.get('button[data-target="checkout.checkoutBUtton"]')
    }

    getAmountInputField() {
        return cy.get('input[data-target="amount.otherInput"]')
    }

    getSendToMeTab() {
        return cy.get('a[data-target="tabs.sendToMyselfTab"]')
    }

    getSendToOthersTab() {
        return cy.get('a[data-target="tabs.sendToOtherTab"]')
    }

    getCheckoutPrice() {
        return cy.get('span[data-target="checkout.price"]')
    }

    getPurchaserEmailError() {
        return cy.get('div[data-target="email.purchaserEmailError"]')
    }

    getRecipientEmailError() {
        return cy.get('span[data-target="email.recipientEmailError"]')
    }


}