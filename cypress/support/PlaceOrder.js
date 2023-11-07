
export class AllModules{

TestingModules1(){
  //In this method we delete some item from cart and then place order.
  Cypress.Screenshot.defaults({
    capture: "fullPage",
  });
  cy.visit('https://www.demoblaze.com/');
  cy.wait(5000);
  cy.get('#login2').click();
 // cy.screenshot('capture screen short');

  cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1');
  cy.get('#loginpassword').type('123456789');
  cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  cy.wait(2000);
  cy.get('.navbar-collapse').find('.nav-link').contains('Home').click()
  cy.get('#itemc').click()
  cy.get('.row').find('.hrefch').contains('Samsung galaxy s6').click()
  cy.get('.col-sm-12 > .btn').click()  
  cy.on('window:alert', (message) => {
      // Handle the confirm dialog here
      // For example, you can assert the message and choose to accept or cancel
      expect(message).to.equal('Product added.');
      return true; // Accept the confirmation (OK) button
     
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
        const itemToDelete = 2;
         // Specify the item number you want to delete
         cy.get(`#tbodyid > :nth-child(${itemToDelete}) > :nth-child(4) > a`).click({ force: true });
         cy.log('Item Deleted Successfully')
         cy.wait(2000);
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
       



}
//Here we place order without deleting any item from cart
//And also verify the behaviour of application when 
//we add all information in the info card and then click on cancel button.
TestingModules2(){

    cy.visit('https://www.demoblaze.com/');
    cy.wait(5000);
    cy.get('#login2').click();
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1');
    cy.get('#loginpassword').type('123456789');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('.navbar-collapse').find('.nav-link').contains('Home').click()
    cy.get('#itemc').click()
    cy.get('.row').find('.hrefch').contains('Samsung galaxy s6').click()
    cy.get('.col-sm-12 > .btn').click()  
    cy.on('window:alert', (message) => {
        // Handle the confirm dialog here
        // For example, you can assert the message and choose to accept or cancel
        expect(message).to.equal('Product added.');
        return true; // Accept the confirmation (OK) button
       
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
         
//Here we will add all information and then click on cancel button to verify the app behaviour.

          cy.get('.navbar-collapse').find('.nav-link').contains('Home').click()
          cy.get('#itemc').click()
          cy.get('.row').find('.hrefch').contains('Samsung galaxy s6').click()
          cy.get('.col-sm-12 > .btn').click()  
          // cy.on('window:alert', (message) => {
          //     // Handle the confirm dialog here
          //     // For example, you can assert the message and choose to accept or cancel
          //     expect(message).to.equal('Product added.');
          //     return true; // Accept the confirmation (OK) button
             
          //   });
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
                cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
                cy.url().should('eq','https://www.demoblaze.com/cart.html')
                // Accept the confirmation (OK) button for all alerts
                

    }

}
export const allmodules = new AllModules();