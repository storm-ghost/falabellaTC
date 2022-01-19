describe('FalabellaTC',() => {
it('Busqueda en Google',() => {
    cy.visit('https://www.google.cl/');
    cy.get('.gLFyf').type('falabella{enter}');
    cy.contains('Falabella.com | Todo lo que necesitas en un solo lugar')
    .click();

})
})