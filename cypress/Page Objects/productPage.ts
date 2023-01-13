class productPage {
    public products = '.inventory_item';
    public addToCartButton = '.btn_primary ';
    public shoppingCart = '.shopping_cart_container';
    public menuButton = '.bm-burger-button';
    public logoutButton = '#logout_sidebar_link';
   // public productNameArray : string[] = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)'];
   public productNameArray : string[] = []

   mapProductNames() {
    cy.get('.inventory_item_name').then(($products) => {
        this.productNameArray = Array.from($products).map((el) => el.innerText);
    });

}

    
    addToCart(productName: string) {
        cy.get(this.products).find(this.addToCartButton).eq(this.productNameArray.indexOf(productName)).click()
    }

    addEverythingToCart(){
        for(let i=0; i< this.productNameArray.length; i++ ){
            this.addToCart(this.productNameArray[i])
        }
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