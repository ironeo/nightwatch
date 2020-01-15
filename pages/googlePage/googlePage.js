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
            .AssertStrictEqual(googlePageSelectors.searchButton, googleSearchButton)
            //.AssertStrictEqual(googlePageSelectors.luckySearch, googleLuckySearchButton)

    }
     
    this.goToNewsPage = () => {
        return browser
    }
}
