class LoginScreen {
    async loginEmailElement(){
        const loginEmailElement = await $('~Email Enter your email address')
        return loginEmailElement
    }

    async loginPasswordElement(){
        const passwordEmailElement = await $('~Password Enter password')
        return passwordEmailElement
    }

    async loginSubmitElement(){
        const loginSubmitElement = await $('~login_button')
        return loginSubmitElement
    }


//login screen methods
    async clickLogin() {
        const emailElement= await this.loginEmailElement()
        const passwordElement = await this.loginPasswordElement()
        const sabmit = await this.loginSubmitElement()
        await emailElement.addValue('olga@omaze.com')
        await passwordElement.addValue('Password1984!')
        await sabmit.click()
    }
}

module.exports = new LoginScreen()