describe('Fixing current test..', () => {

    beforeEach(function () {
        cy
            .visit('/')
    })

    it('Search number while logged in(captcha blocked)', () => {
        cy
            .get('.cookie-banner-close')
            .click({force: true})
        cy
            .get('.TopNav__Link')
            .click()
        cy
            .window()
            .then(win => {
                localStorage.tcstorage = '{"user":{"redirect":null,"enhancedSearch":true,"enhancedSearchTime":1521117641579,"accessToken":"gVB81DQTVTzXZG6dQ9ck1FjYt3yCMK3e"},"search":{"history":[],"country":{"CID":"India-Other","CN":"India","CCN":"in","CC":"91"}},"showCookieBanner":false}'
            })
        cy
            .get('.sign-in-dialog-content > :nth-child(2)')
            .click()
            .should('not.exist')
            .log("User has logged in")
        cy
            .get('.searchbar__query')
            .type('735358210', { delay: 100 })
        cy
            .get('.searchbar__submit')
            .click()
        cy
            .get('.ProfileRecaptcha > :nth-child(1)')
            .should('be.visible')
        cy
            .get('.ProfileRecaptcha > :nth-child(2)')
            .should('be.visible')
    })
})