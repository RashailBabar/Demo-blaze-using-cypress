export class SignUp{

    //In this we can signup with user name and password and also
    //try to signup new user with same name.
    SignUpTestCases1(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#signin2').click()
    
    cy.get('#signInModal').should('be.visible'); // Check that the modal is visible
   
    cy.get('.modal.fade.show').should('be.visible').wait(1000).find('.close').click(); 
    cy.url().should('eq', 'https://www.demoblaze.com/');   
    cy.wait(5000)
    cy.get('#signin2').click()
        
        cy.get('#signInModal').should('be.visible');
        cy.get('#sign-username')
  .should('be.visible')
  .focus() // Focus on the input field
  .type('BabarAli');//To write user name in the Username field.
        cy.get('#sign-password').type('Test@123')//To write password in the password field
        cy.get('.modal-footer')
  .find('[onclick="register()"]').should('be.visible')
  .click();
  cy.on('window:confirm', (message) => {
    // Handle the confirm dialog here
    // For example, you can assert the message and choose to accept or cancel
    expect(message).to.equal('Sign up successful.');
    return true; // Accept the confirmation (OK) button
    // return false; // Cancel the confirmation (Cancel) button
  });
  

}
//Here we can run the negative test case in which we cannot add password
//we just add user name and click on signup
    SignUpTestCases2(){
//For user signup
        cy.visit('https://www.demoblaze.com/')
        cy.wait(5000)
        cy.get('#signin2').click()
        
        cy.get('#signInModal').should('be.visible');
        cy.get('#sign-username')
        .should('be.visible')
        .focus() // Focus on the input field
        .type('BabarAli');
        cy.get('.modal-footer')
  .find('[onclick="register()"]').should('be.visible')
  .click();


  
  cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()    
    cy.wait(5000)
  
  };
  

    
    
    
    }
    export const signUp = new SignUp()