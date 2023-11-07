export class AboutUs{

AboutUs1(){
    cy.visit('https://www.demoblaze.com/');
    cy.wait(5000);
    cy.get('#login2').click();
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1');
    cy.get('#loginpassword').type('123456789');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('.navbar-collapse').find('.nav-link').contains('About us').click({ force: true });
    cy.get('#videoModal').should('be.visible');
    cy.wait(1000);
    cy.get('#example-video_html5_api').click({ force: true });
    
    // Play the video and wait for a moment to start
    cy.wait(2000);
    cy.get('#example-video_html5_api').then((video) => {
        const videoElement = video[0];
        videoElement.currentTime = 360;
      });

      //Here we can also perform this operation through customs commands


//   cy.controlVideoPlayback('#example-video_html5_api', 'seek', 240);
//     cy.wait(7000)
//     cy.controlVideoPlayback('#example-video_html5_api','seek',600)
//     cy.wait(8000)
    
  
  // Continue with other test actions or assertions
  

}
AboutUs2(){

    cy.visit('https://www.demoblaze.com/');
    cy.wait(5000);
    cy.get('#login2').click();
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1');
    cy.get('#loginpassword').type('123456789');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('.navbar-collapse').find('.nav-link').contains('About us').click({ force: true });
    cy.get('#videoModal').should('be.visible');
    cy.wait(1000);
    cy.get('#example-video_html5_api').click({ force: true });
    cy.wait(3000)
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()


}
AboutUs3(){

    cy.visit('https://www.demoblaze.com/');
    cy.wait(5000);
    cy.get('#login2').click();
    cy.get('#loginusername').wait(5000).should('be.visible').focus().type('Rashail1');
    cy.get('#loginpassword').type('123456789');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.wait(2000);
    cy.get('.navbar-collapse').find('.nav-link').contains('About us').click({ force: true });
    cy.get('#videoModal').should('be.visible');
    cy.wait(1000);
    cy.get('#example-video_html5_api').click({ force: true });
    cy.wait(3000)
    cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').click()




}
}
export const about_us = new AboutUs;