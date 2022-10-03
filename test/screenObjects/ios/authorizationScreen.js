class AuthorizationScreen {
    async clickLogin() {
        await $('~Email Enter your email address').addValue('olga@omaze.com')
        await $('~Password Enter password').addValue('Password1984!')
        await $('~login_button').click()
    }
}

module.exports = new AuthorizationScreen()