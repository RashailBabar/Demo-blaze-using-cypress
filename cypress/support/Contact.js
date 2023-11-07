
export class Contact{
 //Here we will add all fields in the contact form and click on Send message.
    Contact1(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
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

            expect(message).to.eq('Thanks for the message!!')
            return true
        })
     })
}
//Here we will ad only email and send message
Contact2(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click()
    cy.get('#exampleModal').should('be.visible')
     cy.fixture('data/Contact1.json').then((data)=>{
        cy.get('#recipient-email').clear()
        cy.wait(5000)
        cy.log('Typing email value:', data.Email)
        cy.get('#recipient-email').focus().type(data.Email,{delay:1000});
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.on('window:alert',(message)=>{

            expect(message).to.eq('Thanks for the message!!')
            return true
        })
     })
}
//Here we will add only message and click on send message
Contact3(){
    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click()
    cy.get('#exampleModal').should('be.visible')
     cy.fixture('data/Contact1.json').then((data)=>{
       
        
        cy.get('#message-text').type(data.Message)
        cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.on('window:alert',(message)=>{

            expect(message).to.eq('Thanks for the message!!')
            return true
        })
     })
}
//Here we will only add name and click on send message
Contact4(){
cy.visit('https://www.demoblaze.com/')
cy.wait(5000)
cy.get('#login2').click()
cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
cy.get('#loginpassword').type('123456789')
cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
cy.wait(2000)
cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click()
cy.get('#exampleModal').should('be.visible')
 cy.fixture('data/Contact1.json').then((data)=>{
    cy.get('#recipient-name').type(data.Name)
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
       
     cy.on('window:alert',(message)=>{

        expect(message).to.eq('Thanks for the message!!')
        return true
    })
 })
}
//Here we will perform some redirections test cases
Contact5(){

    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
    cy.get('#loginpassword').type('123456789')
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(2000)
    cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click({force:true})
    cy.get('#exampleModal').should('be.visible')
    cy.wait(1000)
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click()
    cy.get('#exampleModal').should('be.visible')
    cy.wait(1000)
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header > .close > span')

cy.get('.navbar-collapse').find('.nav-link').contains('Contact').click({force:true})
    cy.get('#exampleModal').should('be.visible')
    cy.wait(1000)
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({force:true})
        
}
}
export const contact = new Contact()