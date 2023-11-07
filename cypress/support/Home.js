export class Home{

HomePageMobiles(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').find('.nav-link').contains('Home').click()
    cy.get('#itemc').click()
    cy.get('.row').find('.hrefch').contains('Samsung galaxy s6').click()
    cy.get('.row').find('.btn ').contains('Add to cart').click()  
    cy.on('window:alert', (message) => {
        // Handle the confirm dialog here
        // For example, you can assert the message and choose to accept or cancel
        expect(message).to.equal('Product added.');
        return true; // Accept the confirmation (OK) button
        // return false; // Cancel the confirmation (Cancel) button
      });
      cy.wait(5000)
      cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
      
}
HomePageLaptops(){

    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
    cy.get('.list-group').find('.list-group-item').contains('Laptops').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.row').find('.btn ').contains('Add to cart').click()  
    cy.on('window:alert', (message) => {
        // Handle the confirm dialog here
        // For example, you can assert the message and choose to accept or cancel
        expect(message).to.equal('Product added.');
        return true; // Accept the confirmation (OK) button
        // return false; // Cancel the confirmation (Cancel) button
      });
      cy.wait(5000)
      cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
      




}

HomePageMoniters(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
    cy.get('.list-group').find('.list-group-item').contains('Monitors').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.row').find('.btn ').contains('Add to cart').click()  
    cy.on('window:alert', (message) => {
        // Handle the confirm dialog here
        // For example, you can assert the message and choose to accept or cancel
        expect(message).to.equal('Product added.');
        return true; // Accept the confirmation (OK) button
        // return false; // Cancel the confirmation (Cancel) button
      });
      cy.wait(5000)
      cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
      

}

}
export const home = new Home;