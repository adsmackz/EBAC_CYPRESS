///   <reference types="cypress" />

    describe('DevFinance', () => {
        it('Adicionar, verificar e remover uma entrada e saída', () => {
        
            cy.visit('https://devfinance-agilizei.netlify.app/#')   
            cy.get('a[onclick*=open]').click() 
            cy.get('#description').type('Automação_ENTRADA')
            cy.get('#amount').type('10')
            cy.get('#date').type('2021-09-25')
            cy.contains('button', 'Salvar').click()
    
            cy.get('a[onclick*=open]').click() 
            cy.get('#description').type('Automação_SAIDA')
            cy.get('#amount').type('-10')
            cy.get('#date').type('2021-09-25')
            cy.contains('button', 'Salvar').click()
            
            cy.get('table tbody tr').should('have.length', 2)            
            cy.get('#data-table > tbody > tr:nth-child(1) > td:nth-child(4) > img').click()
            cy.get('[onclick*=t]').click()        
            cy.get('table tbody tr').should('have.length', 0) 
            
 

    });
});       




/// usar hooks
    /// beforeEach(() =>  {
    /// cy.visit("site")
