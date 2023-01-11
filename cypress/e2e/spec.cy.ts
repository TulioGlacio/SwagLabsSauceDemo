import loginPage from "../Page Objects/loginPage";
import productPage from "../Page Objects/productPage";
import cartPage from "../Page Objects/cartPage";
import checkoutPage from "../Page Objects/checkoutPage";

describe ('E2E tests',()=>{
    

    it('Should login, add products to cart, remove product, checkout and purchase', ()=>{
            
        cy.visit('/')
            // Logging in
        loginPage.login('standard_user', '');

            // Adding products to the cart
        productPage.addToCart(0);
        productPage.addToCart(1);

            // Remove product from cart
        productPage.openShoppingCart();
        cartPage.removeProduct('Sauce Labs Backpack');
  
            // Checkout
        cartPage.checkOutCart();
        checkoutPage.fillForm('John', 'Doe', '11111');
        checkoutPage.continue();
        checkoutPage.finish();
        
    })

})