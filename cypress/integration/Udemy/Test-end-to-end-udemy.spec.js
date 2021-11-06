describe('udemycurso', () => {
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it('Test-end-to-end - Aula 8', () => {
      const firstName = "Junior";
      const lastName = "Faria";
      const fullName = `${firstName} ${lastName}`


      cy.get('header h1').should('contain','TICKETBOX');

      cy.get('#first-name').type(firstName); 
      cy.get('#last-name').type(lastName);
      cy.get('#email')
        .as('email') 
        .type('juniorfaria-gmaiil.com');
      cy.get('#email.invalid').should('exist')
      cy.get('@email')
        .clear()
        .type('juniorfaria@gmail.com')
      cy.get('#email.invalid').should('not.exist')     
      cy.get('#ticket-quantity').select('3'); 
      cy.get('#vip').check(); 
      cy.get('#friend').check();
      cy.get('#publication').check();
      cy.get('#friend').uncheck();
      cy.get('#requests').type('Automação');
      
      cy.get('.agreement p').should(
         'contain',
         `I, ${fullName}, wish to buy 3 VIP tickets`
         );

      cy.get('#agree').click()
      cy.get('#signature').type(fullName);

      cy.get("button[type='submit']")
        .as("submitButton")
        .should('not.be.disabled')
     
      cy.get("button[type='reset']").click()
      cy.get("@submitButton").should('be.disabled')


      
    

            


      
      

    });
  
  

});      






// .nomedaclasse