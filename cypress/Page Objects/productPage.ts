class productPage {
    public products = '.inventory_item';
    public addToCartButton = '.btn_primary.btn_inventory';
    public shoppingCart = '.shopping_cart_container';
    public menuButton = '.bm-burger-button';
    public logoutButton = '#logout_sidebar_link';

    addToCart(productIndex: number) {
        cy.get(this.products).eq(productIndex).contains('Add to cart').click()
    }

    openShoppingCart() {
        cy.get(this.shoppingCart).click();
    }
    
    logout() {
        cy.get(this.menuButton).click();
        cy.get(this.logoutButton).click();
    }
}

export default new productPage();