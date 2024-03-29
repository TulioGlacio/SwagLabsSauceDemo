class loginPage {
    public emailField = '#user-name';
    public passwordField = '#password';
    public loginButton = '#login-button';
    public errorMessage = '.error-button';
    public linkSignUp = '[href="/sign_up"]';

    login(loginName: string, password: string) {
        cy.get(this.emailField).type(loginName);
        cy.get(this.passwordField).type(password, {log: false});
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
