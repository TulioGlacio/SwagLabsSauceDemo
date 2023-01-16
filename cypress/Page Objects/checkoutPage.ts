class CheckoutPage {
    public firstNameField = '#first-name';
    public lastNameField = '#last-name';
    public postalCodeField = '#postal-code';
    public continueButton = '.cart_button';
    public finishButton = '.btn_action.cart_button';
    public errorMessage = '.error-message-container';

    fillForm(firstName: string, lastName: string, postalCode: string) {
        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.postalCodeField).type(postalCode);
    }

    fillFormWithoutFirstName(lastName: string, postalCode: string) {
        cy.get(this.firstNameField).clear();
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.postalCodeField).type(postalCode);
    }

    fillFormWithoutLastName(firstName: string, postalCode: string) {
        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).clear();
        cy.get(this.postalCodeField).type(postalCode);
    }

    fillFormWithoutPostalCode(firstName: string, lastName: string) {
        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.postalCodeField).clear()
    }
    
    continue() {
        cy.get(this.continueButton).click();
    }
    
    finish() {
        cy.get(this.finishButton).click();
    }
    
    checkErrorMessage(expectedMessage: string) {
        cy.get(this.errorMessage).contains(expectedMessage);
    }
}

export default new CheckoutPage();