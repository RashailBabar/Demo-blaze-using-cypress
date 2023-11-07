// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
Cypress.Commands.add('controlVideoPlayback', (videoSelector, action, timeInSeconds) => {
    cy.get(videoSelector).then(($video) => {
      const videoElement = $video[0];
  
      if (action === 'play') {
        videoElement.play();
      } else if (action === 'pause') {
        videoElement.pause();
      } else if (action === 'seek') {
        // Ensure timeInSeconds is within the video's duration
        timeInSeconds = Math.min(timeInSeconds, videoElement.duration);
  
        videoElement.currentTime = timeInSeconds;
      }
    });
  });
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })