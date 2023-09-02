export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    btn_addtocart = '#add-to-cart-sauce-labs-backpack'
    btn_remove = '#remove-sauce-labs-backpack'
    btn_burger = '#react-burger-menu-btn'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    addProductToCart(){
        cy.get(this.btn_addtocart).click()
        cy.get('.shopping_cart_badge').contains('1').should('be.visible')
    }

    removePoductFromCart(){
        cy.get(this.btn_remove).click()
        cy.get('.shopping_cart_badge').should('not.exist')
    }

    logout(){
        cy.get(this.btn_burger).click()
        cy.contains('Logout').click()
        cy.contains('Login').should('be.visible') 
    }

}