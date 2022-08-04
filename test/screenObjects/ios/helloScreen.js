class HelloScreen {
    async get HelloWorldText() {
        const hello= await $('XCUIElementTypeStaticText')
        return hello

    }
}

module.exports = new HelloScreen()