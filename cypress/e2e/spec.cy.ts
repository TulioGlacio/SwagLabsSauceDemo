import loginPage from "../Page Objects/loginPage";
import productPage from "../Page Objects/productPage";
import cartPage from "../Page Objects/cartPage";
import checkoutPage from "../Page Objects/checkoutPage";

const password: string = Cypress.env('password');



describe ('E2E tests',()=>{
    
    beforeEach(()=>{
            
            //Visiting the page
        cy.visit('/');
        
            // Logging in
        loginPage.login('standard_user', 'secret_sauce');

    })

    it('Should login, add products to cart, remove product, checkout and purchase', ()=>{
        
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

    it('Should login and assert if all sorting work correctly', ()=>{

            // Sorting Products by name From Z to A
        productPage.setSortingType('Name (Z to A)');
            
            // Asserting if sorted correctly
        productPage.assertProductsSortedReverseAlphabetically();

            // Sorting Products by name From A to Z
        productPage.setSortingType('Name (A to Z)');
            
            // Asserting if sorted correctly
        productPage.assertProductsSortedAlphabetically();

            // Sorting Products by name From Z to A
         productPage.setSortingType('Price (low to high)');
            
            // Asserting if sorted correctly
        productPage.assertProductsSortedByPriceLowToHigh();

            // Sorting Products by name From Z to A
        productPage.setSortingType('Price (high to low)');
            
            // Asserting if sorted correctly
        productPage.assertProductsSortedByPriceHighToLow();
        
    })

    after(()=>{
        productPage.logout();
    })

})
