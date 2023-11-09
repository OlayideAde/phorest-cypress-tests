export class CheckoutPage {
    getConfirmButton() {
        return cy.contains('Confirm Details')
    }

    getCardNameField() {
        return cy.get('#card-name')
    }

    getCardNumberField() {
        return cy.get('#card-number')
    }

    getCardZipField() {
        return cy.get('#card-zip')
    }

    getCardExpirationField() {
        return cy.get('#card-expiry')
    }

    getCardCvvField() {
        return cy.get('#card-security')
    }

    getSubmitButton() {
        return cy.get('button#submitButton')
    }
}