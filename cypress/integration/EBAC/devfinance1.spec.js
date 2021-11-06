///   <reference types="cypress" />

    describe('DevFinance', () => {

    beforeEach(() => {   // Antes de cada teste
      cy.visit('https://devfinance-agilizei.netlify.app/#') 
    });

        it('Exlcuir uma transação da listagem', () => {
        
             
            cy.get('a[onclick*=open]').click() 
            cy.get('#description').type('Automação')
            cy.get('#amount').type('10')
            cy.get('#date').type('2021-09-25')
            cy.contains('button', 'Salvar').click()
    
            cy.get('table tbody tr').should('have.length', 1)   
            
                        
            cy.contains('td', 'Automação')       // a partir de um texto()
              .parents()                        // voltar para o elemento pai
              .find('img[onclick*=remove]')    //  e depois buscar (find) um elem,ento específico
              // .click()
        
                       
            
            cy.contains('td', 'Automação') 
              .siblings()   //  lista os elementos irmaos
              .children('img[onclick*=remove]')
              .click()
        
              cy.get('table tbody tr').should('have.length', 0)  
         
        

    });
});       




/// HOOKs => Ações que se repetem entre os testes
    // before          - Antes de todos os testes (1x)
    // begoreEach      - Antes de cada Teste 
    // afterEach       - Depois de cada Teste
    // after           - Depois de todos os testes 
    // #data-table tbody tr:last-child td:last-child img[onclick*=remove]

    /// beforeEach(() =>  {
    /// cy.visit("site")

    ///  [onclick*=remove]
   ///  [onclick*=remove]
   
   ///  ^ - início
  ///   $ - final
  ///   * - em qualquer posicao
   ///
   /// https://developer.mozilla.org/pt-BR/docs/Web/CSS/Attribute_selectors
   // it > Teste
   // dependecia entre testes 

   //   .eq(0) //
   //   .first()
  //     .last()