/// <reference types="Cypress" />
 
describe('My third Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Checkboxes

cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
//Check all checkboxes
cy.get('input[type="checkbox"]').check().should('be.checked')
//Uncheck all checkboxes
cy.get('input[type="checkbox"]').uncheck().should('be.not.checked')
//Select multiple option at time
//Here first get generic /common locator and then in check pass the values of checkboxes
cy.get('input[type="checkbox"]').check(['option1','option3'])


//static dropdown
//cy.get('select').select('option1')
cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')


//Dynamic dropdown
cy.get('#autocomplete').type('In')
cy.get('.ui-menu-item').each(($element,index,$list)=>{

           if($element.text()==='India'){
                 cy.wrap($element).click()
           }

})


//Visibility invisibility : autocomplete
cy.get('#autocomplete').should('have.value','India')
//visible invisible
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')


//radio buttons
 cy.get('[value="radio3"]').check().should('be.checked')

})
})