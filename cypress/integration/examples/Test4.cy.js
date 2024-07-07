/// <reference types="Cypress" />
 
describe('My Fourth Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Handling of alerts
//In cypress Alert and popup gets autohandled
cy.get('#alertbtn').click();
/*Now suppose we have to verify text on alert then we need to 
purposely fire Window:Alert /Window :Confirm from cypress
*/
cy.on('window:alert',(str)=>{

//Pure mocha assertion to compare two strings
expect(str).to.equal('Hello , share this practice page and share your knowledge')

})

//Handling Window: Confirm
cy.get('#confirmbtn').click();

cy.on('window:confirm',(str)=>{

      expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

})
})