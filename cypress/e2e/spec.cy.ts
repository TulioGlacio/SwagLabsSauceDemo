import loginPage from "../Page Objects/loginPage";
import productPage from "../Page Objects/productPage";
import cartPage from "../Page Objects/cartPage";
import checkoutPage from "../Page Objects/checkoutPage";

const password: string = Cypress.env('password');



describe ('E2E tests',()=>{
    
    before(()=>{
        cy.visit('/');
    })

    it('Should login, add products to cart, remove product, checkout and purchase', ()=>{
        
            // Logging in
        loginPage.login('standard_user', password);

            // Adding products to the cart
        productPage.addToCart('Sauce Labs Backpack');
        productPage.addToCart('Sauce Labs Bike Light');

            // Remove product from cart
        productPage.openShoppingCart();
        cartPage.removeProduct('Sauce Labs Backpack');
  
            // Checkout
        cartPage.checkOutCart();
        checkoutPage.fillForm('John', 'Doe', '11111');
        checkoutPage.continue();
        checkoutPage.finish();
        
    })

    after(()=>{
        productPage.logout();
    })

})