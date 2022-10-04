class LoginScreen {
    async loginEmailElement(){
       return await $('~Email Enter your email address')

    }

    async loginPasswordElement(){
        return await $('~Password Enter password')

    }

    async loginSubmitElement(){
        return await $('~login_button')
    }

    async signUpButton(){
        return await $([name= 'Sign up'])
        //need accs. id
    }
    async loginWord(){
        return await $('~login-heading')
    }

    async forgotPassword(){
        return await $('~Forgot Password?')
    }

    async googleAuthorization(){
        return await $('~ icon-button-google')
    }
    async facebookAuthorization(){
        return await $("~icon-button-facebook")
    }
    async appleAuthorization(){
        return await $('~icon-button-apple')
    }
    async continueGuest(){
        return await $('[name="Continue as Guest"]')
        //need accs. id
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