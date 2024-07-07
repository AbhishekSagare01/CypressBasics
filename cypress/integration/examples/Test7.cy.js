/// <reference types="Cypress" />
 
describe('Child window Handling', function() 
{
    it('My FirstTest case',function() {
 
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //cypress does not support child window handling but we have alternative for it
         
        cy.get('#opentab').then(function(el)
       {
        // here as we are using jquery prop() method , we need to resolve promise
        const url = el.prop('href');
        cy.visit(url);
        //need to write all code under origin when u want to perform operation on new child window
        cy.origin(url,()=>
    {
        cy.get("div.sub-menu-bar a[href*='about']").click();
    })
         
    })
         
         
        });
    }
)