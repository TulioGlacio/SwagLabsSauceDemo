import cypress = require("cypress");

class productPage {
    public products = '.inventory_item';
    public productsNames = '.inventory_item_name';
    public addToCartButton = '.btn_primary';
    public shoppingCart = '.shopping_cart_container';
    public menuButton = '.bm-burger-button';
    public logoutButton = '#logout_sidebar_link';
    public sortSelect = '.product_sort_container'
    public productNameArray : string[] = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt','Sauce Labs Fleece Jacket','Sauce Labs Onesie','Test.allTheThings() T-Shirt (Red)'];

    addToCart(productName: string) {
        cy.get(this.products).find(this.addToCartButton).eq(this.productNameArray.indexOf(productName)).click()
    }

    setSortingType(sortingType: string){
        cy.get(this.sortSelect).select(sortingType);
    }

    assertProductsSortedAlphabetically() {
        cy.get(this.products)
          .each(($el, index, $list) => {
            if (index !== $list.length - 1) {
              const currentName = $el.find(this.productsNames).text();
              const nextName = $el.next().find(this.productsNames).text();
              expect(currentName.localeCompare(nextName)).to.be.lessThan(1);
            }
          });
      }

      assertProductsSortedReverseAlphabetically() {
        cy.get(this.products)
          .each(($el, index, $list) => {
            if (index !== $list.length - 1) {
              const currentName = $el.find(this.productsNames).text();
              const nextName = $el.next().find(this.productsNames).text();
              expect(currentName.localeCompare(nextName)).to.be.greaterThan(-1);
            }
          });
      }

      assertProductsSortedByPriceLowToHigh() {
        cy.get('.inventory_item')
          .each(($el, index, $list) => {
            if (index !== $list.length - 1) {
              const currentPrice = parseFloat($el.find('.inventory_item_price').text().replace('$',''));
              const nextPrice = parseFloat($el.next().find('.inventory_item_price').text().replace('$',''));
              expect(currentPrice).to.be.at.most(nextPrice);
            }
          });
      }

      assertProductsSortedByPriceHighToLow() {
        cy.get('.inventory_item')
          .each(($el, index, $list) => {
            if (index !== $list.length - 1) {
              const currentPrice = parseFloat($el.find('.inventory_item_price').text().replace('$',''));
              const nextPrice = parseFloat($el.next().find('.inventory_item_price').text().replace('$',''));
              expect(currentPrice).to.be.least(nextPrice);
            }
          });
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