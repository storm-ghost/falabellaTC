describe('FalabellaTC',() => {
    
    it('Ingresar a falabella.com',() => {
        cy.visit('https://www.falabella.com/falabella-cl')
    })
    
    it('Cerrar POP-UP',() => {
        cy.log('Existe POP-UP')
        cy.get('.dy-lb-close').should('exist')
        cy.get('.dy-lb-close').click()
    })


    it('Busqueda XBOX',() => {        
        cy.get('#testId-SearchBar-Input').type('Consola XBOX Series')
        cy.get('.SearchBar-module_searchBtnIcon__2L2s0').click()    
    })

    it('Agregar producto al carro',() => {
        cy.contains('Agregar al Carro').click({force: true})
    })

    it('Valida Modal Carrito de compras',() => {
        cy.contains('Lo que llevas en tu Carro').should('exist')
    })
    
    it('Agregar Garantia x 2 años',() => {
        cy.contains('Consolas 2 Años').click()
    })

    it('Ir al carro de compras',() => {
        cy.contains('Ir al Carro').click()
    })

    it('Agregar producto al carro',() => {
        cy.get('.jsx-1566303277.increment').click()
        //cy.contains('Ir al Carro').click({force: true})
    })

    it('Continuar Compra',() => {
        cy.contains('Continuar compra').click()
    })
    
    it('Valida que se avanza al checkout de la compra',() => {
        cy.contains('Resumen de la compra').should('exist')
    })
    

})