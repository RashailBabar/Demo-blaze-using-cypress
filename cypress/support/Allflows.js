
//Here we perform positive test case on all module one by one
export class CompleteFlow{

AllFlow(){

    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('.modal-footer').find('[onclick="logIn()"]').should('be.visible').click()
    cy.wait(2000)
    //Here run the contact Us positive test case
    cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click()
    cy.get('#exampleModal').should('be.visible')
     cy.fixture('data/Contact1.json').then((data)=>{
        cy.get('#recipient-email').clear()
        cy.wait(5000)
        cy.log('Typing email value:', data.Email)
        cy.get('#recipient-email').focus().type(data.Email,{delay:1000});
        cy.get('#recipient-name').type(data.Name)
        cy.get('#message-text').type(data.Message)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.on('window:alert',(message)=>{
              if(message === 'Thanks for the message!!')
            {expect(message).to.eq('Thanks for the message!!')
            return true
        
     }
    return false})
        
        
        
        //Here We run the AboutUs Positive test case
        cy.wait(2000);
        cy.get('.navbar-collapse').find('.nav-link').contains('About us').click({ force: true });
        cy.get('#videoModal').should('be.visible');
        cy.wait(1000);
        cy.get('#example-video_html5_api').click({ force: true });
        cy.wait(3000)
        cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()
        
        //Here We will add items into cart and then Place order
        cy.wait(2000);
        cy.get('.navbar-collapse').find('.nav-link').contains('Home').click()
        cy.get('#itemc').click()
        cy.get('.row').find('.hrefch').contains('Samsung galaxy s6').click()
        cy.get('.col-sm-12 > .btn').click()  
        cy.on('window:alert', (message) => {
            // Handle the confirm dialog here
            // For example, you can assert the message and choose to accept or cancel
            if(message ==='Product added.'){
            expect(message).to.equal('Product added.');
            return true;    
        }
            return false; // Accept the confirmation (OK) button
           
          });
          cy.wait(5000)
         // cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
          cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
          cy.get('.list-group').find('.list-group-item').contains('Laptops').click()
          cy.wait(2000)
          cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
          cy.get('.row').find('.btn ').contains('Add to cart').click()  
        //   cy.on('window:alert', (message) => {
        //       // Handle the confirm dialog here
        //       // For example, you can assert the message and choose to accept or cancel
        //       expect(message).to.equal('Product added.');
        //       return true; // Accept the confirmation (OK) button
        //       // return false; // Cancel the confirmation (Cancel) button
        //     });
            cy.wait(5000)
            cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
            
            cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
            cy.get('.list-group').find('.list-group-item').contains('Monitors').click()
            cy.wait(2000)
            cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
            cy.get('.row').find('.btn ').contains('Add to cart').click()  
           //{}
           //{ // cy.on('window:alert', (message) => {
            //     // Handle the confirm dialog here
            //     // For example, you can assert the message and choose to accept or cancel
            //     expect(message).to.equal('Product added.');
            //     return true; // Accept the confirmation (OK) button
                // return false; // Cancel the confirmation (Cancel) button
              //});
            //}
              cy.wait(5000)
              cy.get('.navbar-collapse').wait(2000).find('.nav-link').contains('Home').click()
              cy.get('#cartur').click()
              
              cy.wait(5000)
              cy.get('#totalp').should('be.visible').invoke('text').then((totalText) => {
                // Convert the text to an integer using parseInt
                const totalAmount = parseInt(totalText, 10); // The '10' parameter specifies the base (decimal).
                cy.wrap(totalAmount).as('TotalAmount');
              
              });
              cy.get('.col-lg-1 > .btn').click()
              cy.get('#orderModal').should('be.visible')
              
              cy.get('#totalm').invoke('text').then((text) => {
                // Extract the integer from the text using regular expressions
                const match = text.match(/\d+/);
              
                if (match) {
                  // Convert the matched value to an integer
                  const amountMode = parseInt(match[0], 10);
                  cy.wrap(amountMode).as('AmountMode');
                } else {
                  cy.log('Failed to extract the integer value from the text');
                }
              });
    
              cy.get('@TotalAmount').then((totalAmount) => {
              cy.get('@AmountMode').then((amountMode) => {
              cy.log('Total Amount: ' + totalAmount); // Log the values for debugging
              cy.log('Amount Mode: ' + amountMode);  // Log the values for debugging
    
                if (totalAmount === amountMode) {
               cy.log('Amount is the same');
                  } else {
                     cy.log('Amount is different');
          }
        });
         });
              //cy.get('.col-lg-1 > .btn').click()
              //cy.get('#orderModal').should('be.visible')
              cy.get('#name').focus().type('Rashail babar ali', { delay: 100, force: true });
              cy.get('#country').type('Pakistan')
              cy.get('#city').type('Rawalpindi')
              cy.get('#card').type('54654645645645654')
              cy.get('#month').type('9')
              cy.get('#year').type('2023')
              
              cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
              cy.get('.sweet-alert').should('be.visible')
              cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!');
              cy.get('.sweet-alert').should('contain', 'Id:');
              cy.get('.sweet-alert').should('contain', 'Card Number: 54654645645645654');
              cy.get('.sweet-alert').should('contain', 'Name: Rashail babar ali');
              cy.get('.sweet-alert').should('contain', 'Date:');
              cy.get('.confirm').click()
cy.wait(2000)

//Here we logout the user
cy.get('#logout2').click()
cy.wait(2000)
cy.url().should('eq','https://www.demoblaze.com/index.html')

     })

    
    }





}
export const ComFlow = new CompleteFlow



