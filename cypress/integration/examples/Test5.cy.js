/// <reference types="Cypress" />
 
describe('My Fifth Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 //this is to remove attribute so that child window opens in the parent itself
 //As cypress doesnt allow switching of parents to child
cy.get("#opentab").invoke('removeAttr','target').click();
//this is to go to child window as cypress doesnt allow crossdomain script if website domains are different
//as here parent web is rahulshettyacademy.com & child is qaclickacademy.com hence we need to do like below
cy.origin("https://www.qaclickacademy.com/",()=>
{
 cy.get("#navbarSupportedContent a[href*='about']").click();
 cy.get(".mt-50 h2").should('contain','QAClick Academy');

})

})
})