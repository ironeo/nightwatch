const nightwatchjsPageSelectors = require('./nightwatchjsPageSelectors')

module.exports = function(browser) {

    this.checkMainTitle = () => {
        return browser
            .assert.containsText(nightwatchjsPageSelectors.nightwatchjsMainTitle, 'Nightwatch.js')
    }

    this.checkUrl = (url) => {
        return browser
            .CheckUrl(url)
    }
    
}

