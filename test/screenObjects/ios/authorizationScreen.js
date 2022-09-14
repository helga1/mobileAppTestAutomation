//const { By} = require('selenium-webdriver')
//const value = require('/Users/olga/mobileAppTestAutomation/helpers/parameters.js')


class AuthorizationScreen {
    async clickLogin() {
       await $('~login_button').click()
        console.log('1')
        await $('~Continue').click()
     await driver.pause(20000)
        const contexts = await driver.getContexts();
       console.log(contexts + ' BFNFGFGNJFGJFGFGJ')
       await  driver.switchContext(contexts[1])
       await $('[name="username"]').addValue('olga@omaze.com')
        await $('[name="password"]').addValue('Password1984!')
        await $('[name="action"]').click()
        await driver.switchContext(contexts[0])
        await $('~home_bee').click()
        await driver.pause(3000)
        await $('~home_logout').click()




    }
}

module.exports = new AuthorizationScreen()