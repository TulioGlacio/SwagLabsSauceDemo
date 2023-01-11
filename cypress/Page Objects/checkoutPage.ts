class CheckoutPage {
    public firstNameField = '#first-name';
    public lastNameField = '#last-name';
    public postalCodeField = '#postal-code';
    public continueButton = '.cart_button';
    public finishButton = '.btn_action.cart_button';
    public errorMessage = '.error-button';

    fillForm(firstName: string, lastName: string, postalCode: string) {
        cy.get(this.firstNameField).type(firstName);
        cy.get(this.lastNameField).type(lastName);
        cy.get(this.postalCodeField).type(postalCode);
    }
    
    continue() {
        cy.get(this.continueButton).click();
    }
    
    finish() {
        cy.get(this.finishButton).click();
    }
    
    checkErrorMessage() {
        cy.get(this.errorMessage).should('be.visible');
    }
}

export default new CheckoutPage();