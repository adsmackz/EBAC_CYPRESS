describe('udemycurso', () => {
  beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"))

    it('Digitando em campos de texto - Aula 3', () => {
      const firstName = "Junior";
      const lastName = "Faria";
      
      cy.get('#first-name').type(firstName); 
      cy.get('#last-name').type(lastName);
      cy.get('#email').type('juniorfaria@gmail.com');
      cy.get('#requests').type('Automação');
      cy.get('#signature').type(`${firstName} ${lastName}`);
    });
  
    it('Interagindo com elementos do tipo select - Aula 4', () => {
      cy.get('#ticket-quantity').select('2');      
    });

    it('Interagindo com radio buttons - Aula 5', () => {
      cy.get('#vip').check();          
    });
  
    it('Interagindo com checkboxes - Aula 6 .pt1', () => {
      cy.get('#social-media').check();
    });

    it('Interagindo com checkboxes - Aula 6 .pt2  ', () => {
      cy.get('#friend').check();
      cy.get('#publication').check();
      cy.get('#friend').uncheck();
    }); 

    it('Realizando verificações - Aula 7', () => {
      cy.get('header h1').should('contain','TICKETBOX');
    }); 

    it('Realizando verificações - Aula 7 .pt2', () => {
      cy.get('#email')
        .as('email') 
        .type('juniorfaria-gmaiil.com');

      cy.get('#email.invalid').should('exist')
      
        cy.get('@email')
        .clear()
        .type('juniorfaria@gmail.com')

       cy.get('#email.invalid').should('not.exist')
    }); 

});      

// get => É para indentificar elementos por css
// type = > Digitar
// const + variavel  => atribui nomes que irei reutilizar
// it.only => Apenas para unico teste
// should('contais') => validar se contem algo dentro do  elemento
// should('exist') => validar se essa classe é qque deixa o campo com erro(vermelho)
// as => Dar apelidos para os elementos e reaproveitar eles, além de que ele guardar estado do elemento quando ele for localizdo (neste caso é preciso relocalizar o elemento)