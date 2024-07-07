/// <reference types="Cypress" />
/// <reference types="Cypress-iframe"/>
import "cypress-iframe"
 
describe('Handling frames in cypress', function() 
{
    it('My FirstTest case',function() {
 
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //for handlig frames , you need to install cypress iframe package
        //cy.frameloaded is requir to load frame and then u can go ahead with performing actions into frame.
        // cy.iframe() is must while performing actions on iframe
         
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
         
         
        });
    }
)