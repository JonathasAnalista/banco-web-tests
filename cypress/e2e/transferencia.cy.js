describe('Transferências', () =>{
    beforeEach(() => {
      cy.visit('/') 
      cy.fixture('credenciais').then(credenciais => {
        cy.get('#username').click().type(credenciais.valida.usuario)
        cy.get('#senha').click().type(credenciais.valida.senha)
      }) 
      cy.contains('button', 'Entrar').click()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
      cy.get('label[for="conta-origem"]').parent().as('Campo-conta-origem')
      cy.get('@Campo-conta-origem').click()
      cy.get('@Campo-conta-origem').contains('Maria Oliveira').click()

      cy.get('label[for="conta-destino"]').parent().as('Campo-conta-destino')
      cy.get('@Campo-conta-destino').click()
      cy.get('@Campo-conta-destino').contains('João da Silva').click()

      cy.get('#valor').click().type('11')

      cy.contains('button', 'Transferir').click()

      cy.get('.toast').should('have.text', 'Transferência realizada!')

    })

})