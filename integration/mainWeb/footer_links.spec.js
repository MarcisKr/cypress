describe('Footer link test cases', () => {
    beforeEach(function () {
        cy
            .visit('/')
    })
    
    it('User can open and see "Terms of Service" from footer', () => {
        cy
            .get('[href="/terms-of-service#eu"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/terms-of-service')
            // .then(resp => {
            //     expect(resp.status).to.eq(200);
            //     expect(resp.body).to.have.property('<h2>TRUECALLER TERMS OF SERVICE</h2>');
            //     expect(resp.body).to.have.property('<h3>15. Governing Law</h3>')
            // })
            .its('body').should('include', '<h2>TRUECALLER TERMS OF SERVICE</h2>')
    })

    it('User can open and see "Privacy Policy" from footer', () => {
        cy
            .get('[href="/privacy-policy#eu"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/privacy-policy')
            .its('body').should('include', '<h2>TRUECALLER PRIVACY POLICY</h2>')
    })

    it('User can open and see "Cookie Policy" from footer', () => {
        cy
            .get('span > [href="/cookie-policy"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/cookie-policy')
            .its('body').should('include', '<h2>Truecaller Cookie Policy</h2>')
    })

    it('User can open and see "Directory" from footer', () => {
        cy
            .get('span > [href="/directory"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/directory')
            .its('body').should('include', '<a href="/directory/spammers" class="ListItem"><div class="ListItem__Icon"><svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></svg></div><div class="ListItem__Info"><div>Spammers</div><div>Truecallers top reported spammers</div></div></a>')
    })

    it('User can open and see "Responsible disclosure" from footer', () => {
        cy
            .get('span > [href="/responsible-disclosure"]')
            .should('be.visible')
        cy
            .request('https://www.truecaller.com/responsible-disclosure')
            .its('body').should('include', '<h2>Truecaller Responsible Disclosure</h2>')
    })
})