const ecosiaPageSelectors = require('./ecosiaPageSelectors')

module.exports = function(browser) {

    this.openEcosiaPage = () => {
        return browser.url('https://ecosia.org')
    }
}