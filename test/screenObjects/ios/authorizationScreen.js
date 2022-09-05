const { By} = require('selenium-webdriver')
class AuthorizationScreen {
    async clickLogin() {
       await $('~login_button').click()
        await $('~Continue').click()
        const contexts = await driver.getContexts();
        await browser.pause(3000)
       await driver.switchContext(contexts[1]);
        await $('[name="username"]').addValue('olga@omaze.com')
        console.log('finish')
        await $('[name="password"]').addValue('Password1984!')
        console.log('finish')
        await $('[name="action"]').click()
        console.log('finish')
        //const contexts1 = await driver.getContexts();
       await browser.pause(3000)
        await driver.switchContext(contexts[0]) // leave webview context

        //console.log(contexts1)
        await $('~home_bee').click()


       // await element.click()


           // await element.addValue('olga@omaze.com')
      //  await $("//*[@name= 'Password']").type('Password1984!')
      //  await $("//*[@name= 'Continue']").click()

    }
}

module.exports = new AuthorizationScreen()