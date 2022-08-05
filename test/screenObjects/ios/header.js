class Header {
    get header() {
        return $$('~header_bar').length
    }

}
module.exports = new Header()