import loginPage from "../Page Objects/loginPage";
import productPage from "../Page Objects/productPage";
import cartPage from "../Page Objects/cartPage";
import checkoutPage from "../Page Objects/checkoutPage";

const password: string = Cypress.env('password');
const firstName: string = Cypress.env('firstName');
const lastName: string = Cypress.env('lastName');
const postalCode: string = Cypress.env('postalCode');



describe ('E2E tests',()=>{
    
    beforeEach(()=>{
            
            //Visiting the page
        cy.visit('/');
        
            // Logging in
        loginPage.login('standard_user', password);

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
        checkoutPage.fillForm(firstName, lastName, postalCode);
        checkoutPage.continue();
        checkoutPage.finish();
        
    })

    it('Should login, add all products to cart, checkout and purchase', ()=>{

            // Adding everything to cart
        productPage.addAllToCart();

            // Opening cart
        productPage.openShoppingCart();

            // Checkout
        cartPage.checkOutCart();
        checkoutPage.fillForm(firstName, lastName, postalCode);
        checkoutPage.continue();
        checkoutPage.finish();

    })

    it('Should login, add products to cart, remove product, checkout without first name and see proper error', ()=>{
        
        // Adding products to the cart
    productPage.addToCart('Sauce Labs Backpack');
    productPage.addToCart('Sauce Labs Bike Light');

        // Opening cart
    productPage.openShoppingCart();

        // Checkout
    cartPage.checkOutCart();
    
        // Filling data withou first name and checking error
    checkoutPage.fillFormWithoutFirstName(lastName,postalCode);
    checkoutPage.continue();
    checkoutPage.checkErrorMessage('Error: First Name is required');

        // Filling data withou last name and checking error
    checkoutPage.fillFormWithoutLastName(firstName,postalCode);
    checkoutPage.continue();
    checkoutPage.checkErrorMessage('Error: Last Name is required');

        // Filling data withou first name and checking error
    checkoutPage.fillFormWithoutPostalCode(firstName,lastName);
    checkoutPage.continue();
    checkoutPage.checkErrorMessage('Error: Postal Code is required');
    
    
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
