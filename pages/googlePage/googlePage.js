const googlePageSelectors = require('./googlePageSelectors')
const dictionary = require('../../dictionary/googleDictionary')


module.exports = function(browser){
    
    this.openGooglePage = () => {
        return browser
            //.url(browser.globals.url())
            .url('https://google.pl')
            
    }

    this.checkMainPage = (googleSearchButton, googleLuckySearchButton) => {
        return browser
        .assert.value(googlePageSelectors.searchButton, googleSearchButton, 'Check search button text')
        .assert.value(googlePageSelectors.luckySearch, googleLuckySearchButton, 'Check lucky search button text')
    }
     
    this.typeSearchTextAndVerifyResults = (searchingText) => {
        return browser
        .setValue(googlePageSelectors.searchInput, searchingText)
        .sendKeys(googlePageSelectors.searchInput, browser.Keys.ENTER)
        .getText(googlePageSelectors.firstResult, function(result) {
            console.log(result.value)
            this.assert.strictEqual(result.value, dictionary.searchResult.nightwatchFirstResult); // only when using Selenium / JSONWire
            
        })
    }
    }
