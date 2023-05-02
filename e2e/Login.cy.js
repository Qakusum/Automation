describe('Login', () => {
    it('Logs in successfully with correct  hdhhdf credentials', () => {
      cy.visit(Cypress.env('baseurl'))
      describe('Login Form', () => {
        const username = Cypress.env('USERNAME');
        const password = Cypress.env('PASSWORD');
        cy.get('input[name="Username"]').type(username);
        cy.get('input[name="Password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.get('button[type="submit"]').click();
        
   
      
    })



        cy.visit(Cypress.env('baseurl'))
        it('logs in with valid credentials', () => {
          const username = Cypress.env('USERNAME');
          const password = Cypress.env('PASSWORD');
          cy.get('input[name="Username"]').type(username);
          cy.get('input[name="Password"]').type(password);

          cy.get('button[type="submit"]').click();
      
          cy.url().should('include', '/dashboard');
        });
      

// test comment 
        cy.visit(Cypress.env('baseurl'))
        it('shows an error message for invalid credentials', () => {
          const fakeEmail = faker.internet.email();
          const fakePassword = faker.internet.password();
      
          cy.get('input[name="Username"]').type(fakeEmail);
          cy.get('input[name="password"]').type(fakePassword);
          cy.get('button[type="submit"]').click();
      
          cy.get('.error-message').should('be.visible');
        });
     
  })
});


