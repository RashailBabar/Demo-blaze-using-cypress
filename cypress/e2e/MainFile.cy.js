


import { home } from "../support/Home"
import { login } from "../support/Login"
import { signUp } from "../support/Signup"
import { contact } from "../support/Contact"
import { about_us } from "../support/AboutUs"
import { allmodules } from "../support/PlaceOrder"

describe('This is the Main function', function() {
//In this we can import all test cases using POM.

////Here we will write test cases for Signup.

    context('Signup Test cases',function(){
//Here we can create all test cases for signup.
    it('Signup test Cases1',function(){
       
        signUp.SignUpTestCases1()
       
        
        })
   it('Signup test Cases2',function(){

    signUp.SignUpTestCases2()
            
            })

})
//// test cases for Login.
context('Login Test cases', function(){
   it('Login test case1',function(){


    login.LoginTestCases()

   })
 it('Login Test case2',function(){

    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    login.LOgin('Rashail123','12345')
    cy.on('window:alert', (message)=>{

        expect(message).to.equal('Wrong password.')
        return true
    })



 })
 
 it('Login Test case 3',function(){

    cy.visit('https://www.demoblaze.com/')
    cy.wait(5000)
    cy.get('#login2').click()
    login.LOgin('Rashail2','123456789')
    cy.on('window:alert', (message)=>{

        expect(message).to.equal('User does not exist.')
        return true
    })



 })
})
// test cases for home page and place orders one by one.
context('Home page Test cases',function(){
  //This test case is for adding Phones in the  cart.
    it('Home Page test cases', function(){

     home.HomePageMobiles()
     
  })
  //This test case is for adding latops in the cart.
  it('Home Page test case 2',function(){

    home.HomePageLaptops()

  })
//This test case is for adding monitors in the cart.
  it('Home Page test case 3',function(){

    home.HomePageMoniters()

  })

})
// test cases for contact form using fixture and POM.
context('This is for Adding contact info in contact form', function(){
  it('First test case',function(){
   contact.Contact1()
})
 it('Second test case',function(){
  contact.Contact2()
 })
 it('Third test case',function(){
  contact.Contact3()
 })
 it('Fourth test case',function(){
  contact.Contact4()
 })
 it('Fifth test case',function(){
  contact.Contact5()
})
})


// test cases for About US Module.
context.only('This is for AboutUs test cases',function(){
it.only('First test case for about us',function(){
about_us.AboutUs1()

})
it('Second test case for about us',function(){
  about_us.AboutUs2()
  
  })
  it('Third test case for about us',function(){
    about_us.AboutUs3()
    
    })
    

})
//Here we Will perform integration testing to select and place order from cart.
context('Here we perform Integration testing to select and place order from carts',function(){
it('First test case of Placing order',function(){
  
  allmodules.TestingModules1()
})
it('Second test case of placing order ',function(){

allmodules.TestingModules2()


})
})




})
