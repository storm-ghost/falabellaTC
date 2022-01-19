describe('FalabellaTC',() => {
it('Ingresar En Google',() => {
    cy.visit('https://www.google.cl/')
})

it('Buscar En Google',() => {
    cy.get('input[name="q"]').type('falabella.com{enter}')
    //cy.get('#search a').invoke('attr','href')
    //cy.contains('Falabella.com | Todo lo que necesitas en un solo lugar').click();
})

it('Ingresar a resultado de busqueda de falabella.com',() => {
    //cy.get('#search a').invoke('attr','href')
    //cy.contains('Falabella.com | Todo lo que necesitas en un solo lugar').click();
})

})