import 'cypress'

class productPage {
    public products = '.inventory_item';
    public addToCartButton = '.btn_primary.btn_inventory';
    public shoppingCart = '.shopping_cart_container';
    public logoutButton = '.bm-burger-button';

    addToCart(productName: string) {
        cy.get(this.products).contains(productName).find(this.addToCartButton).click();
    }

    openShoppingCart() {
        cy.get(this.shoppingCart).click();
    }
    
    logout() {
        cy.get(this.logoutButton).click();
    }
}

export default new productPage();