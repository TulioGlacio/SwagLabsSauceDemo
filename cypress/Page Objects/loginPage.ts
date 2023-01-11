import 'cypress'

class loginPage {
    public emailField = '#user-name';
    public passwordField = '#password';
    public loginButton = '.btn_action';
    public errorMessage = '.error-button';
    public linkSignUp = '[href="/sign_up"]';

    login(email: string, password: string) {
        cy.get(this.emailField).type(email);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
    }

    checkErrorMessage() {
        cy.get(this.errorMessage).should('be.visible');
    }
    
    navigateToSignUpPage() {
        cy.get(this.linkSignUp).click();
    }
}

export default new loginPage();