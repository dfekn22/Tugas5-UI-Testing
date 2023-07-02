describe('Kasir Aja Automation', ()=> {
    it('Add Product', () =>{
        cy.visit('https://kasirdemo.belajarqa.com')
        //login
        cy.get('#email').type('daffa@gmail.com')
        cy.get('#password').type('123')
        cy.get('.chakra-button').click()

        //add product
        cy.get('[href="/products"] > .css-ewi1jp').click()
        cy.get('.css-1piskbq').click()
        cy.get('#nama')
            .type('apel (automate)')
        cy.get('#deskripsi')
            .type('deskripsi apel')
        cy.get('#harga\\ beli')
            .type('5000')
        cy.get('#harga\\ jual')
            .type('10000')
        cy.get('#stok')
            .type('20')
        cy.get('#kategori').click()
        cy.get('.css-u3dlpe').click()
        cy.get('.chakra-button').click()
    })
    it('Add Pelanggan', () =>{
        cy.visit('https://kasirdemo.belajarqa.com')
        //login
        cy.get('#email').type('daffa@gmail.com')
        cy.get('#password').type('123')
        cy.get('.chakra-button').click()
        
        //add pelanggan
        cy.get(':nth-child(9) > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q').click()
        cy.get('.css-1piskbq').click()
        cy.get('#nama')
            .type('daffa (automate)')
        cy.get('#no\\.hp')
            .type('0878123323123')
        cy.get('#alamat')
            .type('tangerang selatan')
        cy.get('#keterangan')
            .type('sanber student')
        cy.get('.chakra-button').click()
    })
})