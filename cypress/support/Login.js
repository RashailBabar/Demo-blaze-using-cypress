export class Login{
//Here we user will login with valid credentials.
LoginTestCases(){
cy.visit('https://www.demoblaze.com/')
cy.wait(5000)
cy.get('#login2').click()
cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1')
cy.get('#loginpassword').type('123456789')
cy.get('.modal-footer').find('[onclick="logIn()"]').should('be.visible').click()


}

// Now we can create a methods for negative testings
LoginUsername(username){

    cy.get('#loginusername').wait(5000).should('be.visible').focus().type(username)

}

LoginPassword(Password){

    cy.get('#loginpassword').type(Password)


}
LoginButton(){
    cy.get('.modal-footer').find('[onclick="logIn()"]').should('be.visible').click()



}
LOgin(username,Password){

    this.LoginUsername(username);
    this.LoginPassword(Password);
    this.LoginButton();
}
}
export const login = new Login()