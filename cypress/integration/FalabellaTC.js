describe('FalabellaTC',() => {
    it('Busqueda XBOX',() => {
        cy.visit('https://www.falabella.com/falabella-cl')
        cy.wait(15000)
        cy.log('Existe POP-UP')
        cy.get('.dy-lb-close').should('exist')
        cy.get('.dy-lb-close').click()
        
        cy.get('#testId-SearchBar-Input').type('Consola XBOX Series')
        cy.get('.SearchBar-module_searchBtnIcon__2L2s0').click()
        cy.get('#buttonForCustomers').click()
        
        

        //cy.get('.gLFyf').type('falabella{enter}');
        //cy.contains('Falabella.com | Todo lo que necesitas en un solo lugar')
        //.click();

    })
})