class CartPage {
    public productsInCart = '.cart_item';
    public productName = '.inventory_item_name';
    public removeButton = '.cart_button';
    public continueShopping = '[href="/inventory.html"]';
    public checkOut = '.btn_action.checkout_button';

    removeProduct(productName: string) {
        cy.get(this.productsInCart).contains(productName).siblings().contains('Remove').click();
    }

    // getProductNames() {
    //     return cy.get(this.productsInCart).then(items => {
    //         return items.map(item => {
    //           return item.find(this.productName).text();
    //         });
    //     });
    // }

    navigateToInventory() {
        cy.get(this.continueShopping).click();
    }
    
    checkOutCart() {
        cy.get(this.checkOut).click();
    }
}

export default new CartPage();