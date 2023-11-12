import { faker } from "@faker-js/faker";
import { GiftCardsPage } from "../pageObjects/giftCardsPage.js";
import { CheckoutPage } from "../pageObjects/checkoutPage.js";

let giftCardsPage;
let checkoutPage;
let firstName;
let lastName;
let cardExpiry;
let cardName;
let cardZip;
let cardNumber;
let cardCvv;
let senderEmail;
let recipientEmail;
let message;

describe("Gift cards purchase tests", () => {
  before(() => {
    giftCardsPage = new GiftCardsPage();
    checkoutPage = new CheckoutPage();
  });

  describe("Gift cards purchase page UI test", () => {
    describe("Positve tests", () => {
      beforeEach(() => {
        cy.visit("/");
        cy.fixture("cards").its("test_card").as("testcard");
      });

      it("should verify that user can purchase gift card of fixed value for self", () => {
        //select option for $50
        giftCardsPage.selectOption("50");

        //enter email, first name and last name
        senderEmail = Cypress.env("sender_email");
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        giftCardsPage.fillSenderForm(senderEmail, firstName, lastName);

        //click button to proceed
        giftCardsPage.getSubmitButton().eq(0).click({ force: true });

        //click button to confirm details
        checkoutPage.getConfirmDetailsButton().should("be.visible").click();

        cy.get("@testcard").then((testcard) => {
          cardExpiry = `${testcard.EXPIRY_MONTH}/${testcard.EXPIRY_YEAR}`;
          cardNumber = testcard.PAN;
          cardCvv = testcard.CVV;
          cardZip = testcard.ZIP_CODE;
          cardName = testcard.NAME;

          //verify that checkout form is loaded
          cy.frameLoaded("[id^=hostedform]");
          //fill card details
          checkoutPage.fillCardDetails(
            cardName,
            cardZip,
            cardNumber,
            cardExpiry,
            cardCvv
          );
          //submit card details
          cy.iframe("[id^=hostedform]").find("button#submitButton").click();
        });

        //verify success page is displayed
        checkoutPage.verifySuccessPage();
      });

      it("should verify that user can purchase gift card of fixed value for others", () => {
        giftCardsPage.getSendToOthersTab().click();
        //select amount
        giftCardsPage.selectOption("150");

        //enter email, first name and last name for sender
        senderEmail = Cypress.env("sender_email");
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        giftCardsPage.fillSenderForm(senderEmail, firstName, lastName);

        //enter recipient email and message
        recipientEmail = Cypress.env("recipient_email");
        message = faker.lorem.lines({ min: 1, max: 1 });
        giftCardsPage.fillRecipientForm(recipientEmail, message);

        //click button to proceed
        giftCardsPage.getSubmitButton().eq(0).click({ force: true });

        //click button to confirm details
        checkoutPage.getConfirmDetailsButton().should("be.visible").click();

        //enter valid card details
        cy.get("@testcard").then((testcard) => {
          cardExpiry = `${testcard.EXPIRY_MONTH}/${testcard.EXPIRY_YEAR}`;
          cardNumber = testcard.PAN;
          cardCvv = testcard.CVV;
          cardZip = testcard.ZIP_CODE;
          cardName = testcard.NAME;

          //verify that checkout form is loaded
          cy.frameLoaded("[id^=hostedform]");
          //fill card details
          checkoutPage.fillCardDetails(
            cardName,
            cardZip,
            cardNumber,
            cardExpiry,
            cardCvv
          );
          //submit card details
          cy.iframe("[id^=hostedform]").find("button#submitButton").click();
        });

        //verify success page is displayed
        checkoutPage.verifySuccessPage();
      });

      it("should verify that user can purchase gift card of user-defined value for self", () => {
        //enter giftcard value within range 25 - 100
        giftCardsPage.selectOption("Other");
        giftCardsPage
          .getAmountInputField()
          .type(faker.number.int({ min: 25, max: 1000 }));

        //enter email, first name and last name
        senderEmail = Cypress.env("sender_email");
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        giftCardsPage.fillSenderForm(senderEmail, firstName, lastName);

        //click button to proceed
        giftCardsPage.getSubmitButton().eq(0).click({ force: true });

        //click button to confirm details
        checkoutPage.getConfirmDetailsButton().should("be.visible").click();

        cy.get("@testcard").then((testcard) => {
          cardExpiry = `${testcard.EXPIRY_MONTH}/${testcard.EXPIRY_YEAR}`;
          cardNumber = testcard.PAN;
          cardCvv = testcard.CVV;
          cardZip = testcard.ZIP_CODE;
          cardName = testcard.NAME;

          //verify that checkout form is loaded
          cy.frameLoaded("[id^=hostedform]");
          //fill card details
          checkoutPage.fillCardDetails(
            cardName,
            cardZip,
            cardNumber,
            cardExpiry,
            cardCvv
          );
          //submit card details
          cy.iframe("[id^=hostedform]").find("button#submitButton").click();
        });

        //verify success page is displayed
        checkoutPage.verifySuccessPage();
      });

      it("should verify that user can purchase gift card of user-dfined value for others", () => {
        giftCardsPage.getSendToOthersTab().click();
        //enter giftcard value within range 25 - 100
        giftCardsPage.selectOption("Other");
        giftCardsPage
          .getAmountInputField()
          .type(faker.number.int({ min: 25, max: 1000 }));

        //enter email, first name and last name for sender
        senderEmail = Cypress.env("sender_email");
        firstName = faker.name.firstName();
        lastName = faker.name.lastName();
        giftCardsPage.fillSenderForm(senderEmail, firstName, lastName);

        //enter recipient email and message
        recipientEmail = Cypress.env("recipient_email");
        message = faker.lorem.lines({ min: 1, max: 1 });
        giftCardsPage.fillRecipientForm(recipientEmail, message);

        //click button to proceed
        giftCardsPage.getSubmitButton().eq(0).click({ force: true });

        //click button to confirm details
        checkoutPage.getConfirmDetailsButton().should("be.visible").click();

        cy.get("@testcard").then((testcard) => {
          cardExpiry = `${testcard.EXPIRY_MONTH}/${testcard.EXPIRY_YEAR}`;
          cardNumber = testcard.PAN;
          cardCvv = testcard.CVV;
          cardZip = testcard.ZIP_CODE;
          cardName = testcard.NAME;

          //verify that checkout form is loaded
          cy.frameLoaded("[id^=hostedform]");
          //fill card details
          checkoutPage.fillCardDetails(
            cardName,
            cardZip,
            cardNumber,
            cardExpiry,
            cardCvv
          );
          //submit card details
          cy.iframe("[id^=hostedform]").find("button#submitButton").click();
        });

        //verify success page is displayed
        checkoutPage.verifySuccessPage();
      });
    });
  });
});
