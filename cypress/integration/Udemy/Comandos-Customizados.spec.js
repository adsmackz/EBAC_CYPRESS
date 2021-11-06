describe('udemycurso', () => {
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it("Comandos Customizados - Aula 9", () => {
      const cadastro = {
        firstName: "Junior",
        lastName: "Faria",
        email:"JuniorFaria@gmail.com"
        
    };      
   
      
      cy.get('header h1').should('contain','TICKETBOX');

      cy.dados(cadastro);
      cy.get('#ticket-quantity').select('3'); 
      cy.get('#vip').check(); 
      cy.get('#friend').check();
      cy.get('#publication').check();
      cy.get('#friend').uncheck();
      cy.get('#requests').type('Automação');     
      cy.get('#agree').click()
    

      cy.get("button[type='submit']")
        .as("submitButton")
        .should('not.be.disabled')
     
      cy.get("button[type='reset']").click()
      cy.get("@submitButton").should('be.disabled')
  
      });   
 
  

});      







// .nomedaclasse