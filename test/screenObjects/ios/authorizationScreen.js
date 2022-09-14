class AuthorizationScreen {
    async clickLogin() {
       await $('~login_button').click()
        await $('~Continue').click()
     await driver.pause(20000)
        const contexts = await driver.getContexts();
        const contexts1 = await driver.getContexts();
        const contexts2 = await driver.getContexts();
       await  driver.switchContext(contexts[1])
       await $('[name="username"]').addValue('olga@omaze.com')
        await $('[name="password"]').addValue('Password1984!')
        await $('[name="action"]').click()
        await driver.switchContext(contexts[0])
        await $('~home_stg-dogfood4-win-a-100-amazon-gc').click()
    }
}

module.exports = new AuthorizationScreen()