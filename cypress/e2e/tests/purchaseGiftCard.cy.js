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

describe("Gift cards purchase tests", () => {
  before(() => {
    giftCardsPage = new GiftCardsPage();
    checkoutPage = new CheckoutPage();
  });

  describe("Gift cards purchase page UI test", () => {
    describe("Positve tests", () => {
      before(() => {
        cy.visit("/");
        cy.fixture("emails").as("testEmails");
        cy.fixture("cards").its("test_card").as("testcard");
      });

      it.only("should verify that user can purchase gift card of pre-determined value for self", () => {
        //select option for $50
        giftCardsPage.selectOption("50");

        //enter email, first name and last name
        cy.get("@testEmails").then((testEmails) => {
          senderEmail = testEmails.sender_email;
          firstName = faker.name.firstName();
          lastName = faker.name.lastName();
          giftCardsPage.fillSenderForm(senderEmail, firstName, lastName);
        });

        //click button to proceed
        giftCardsPage.getSubmitButton().eq(0).click({ force: true });

        //click button to confirm details
        checkoutPage.getConfirmDetailsButton().click();

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
        cy.url().should("include", "/demous#success");
        checkoutPage.getSuccessNotificationMessage().should("be.visible");
        checkoutPage.getDoneButton().click()
      });

      it("should verify that user can purchase gift card of pre-determined value for others", () => {
        //select amount
        //enter email, first name and last name
        //enter recipient email and message
        //click button to proceed
        //click button to confirm details
        //enter valid card details
        //click submit
      });

      it("should verify that user can purchase gift card of user-defined value for self", () => {
        //select amount
        //enter email, first name and last name
        //enter recipient email and message
        //click button to proceed
        //click button to confirm details
        //enter valid card details
        //click submit
      });

      it("should verify that user can purchase gift card of user-dfined value for others", () => {
        //select amount
        //enter email, first name and last name
        //enter recipient email and message
        //click button to proceed
        //click button to confirm details
        //enter valid card details
        //click submit
      });
    });
  });
});
