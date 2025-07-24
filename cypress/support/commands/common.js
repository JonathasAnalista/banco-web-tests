Cypress.Commands.add('verificarMensagemNoToast', mensagem => {
   cy.get('.toast').should('have.text', mensagem)

})

Cypress.Commands.add('selecionarOpcaoNaComboBox', (labelDoCampo, opcao) => {
   cy.get(`label[for="${labelDoCampo}"]`).parent().as(`Campo-${labelDoCampo}`)
   cy.get(`@Campo-${labelDoCampo}`).click()
   cy.get(`@Campo-${labelDoCampo}`).contains(opcao).click()
})