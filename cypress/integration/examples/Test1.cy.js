//cypress - spec
/// <reference types= "Cypress" />   
// Above is given for autosuggestion of cypress while writing tests

describe("My first Testsuit", function(){


it("My first test case",function(){
    cy.once('uncaught:exception', () => false);

  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
  cy.get('.search-keyword').type('ca')
  cy.wait(2000)
  cy.get('.product:visible').should('have.length',4) //to get only visible element we use :visible
  // Parent child chaining use find . which will give you products withing your parent locators 
  //to avoid multiple use of .product loactor we can alias it as below
  cy.get('.products').as('productLocator')
  cy.get('@productLocator').find('.product').should('have.length',4)
  //eq is used for indexing 
  cy.get('@productLocator').find('.product').eq(0).contains('ADD TO CART').click()
  cy.get('.products').find('.product').each(($element,index,$list)=> {
  
     const textVeg = $element.find("h4[class='product-name']").text()
     if(textVeg.includes('Cauliflower'))
     {
    
       //We have wrapped it because as click becomes deprecated if we dont do that

       cy.wrap($element).find("button[type='button']").click()

     }
 })
 //console.log(cy.get('.brand').text())
 //To verify the logo text use should from chai
 cy.get('.brand').should('have.text','GREENKART')
  cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())

  })

})









})