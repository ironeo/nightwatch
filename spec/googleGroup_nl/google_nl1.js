const dictionary = require('../../dictionary/googleDictionary')
module.exports = {
    '@tags': ['google_nl'],
    'Check google search result': function (browser) {
      //const configuration = browser.globals.getConfig('googleConf')
      browser
        .page.googlePage().openGooglePage()
        .page.googlePage().checkMainPage(dictionary.search.googleSearchButton,
            dictionary.search.googleLuckySearchButton
            )
        .page.googlePage().typeSearchTextAndVerifyResults('nightwatch js')
        browser.end()

        
    }
  }
  