const dictionary = require('./../../dictionary/dictionary_pl')

module.exports = {
    'My first test': function(browser){
        browser
            .page.ecosiaPage().openEcosiaPage()
            .page.ecosiaPage().setSearchText(dictionary.ecosiaSearchText)
            .page.ecosiaPage().checkFirstResult(dictionary.nightwatchSearchResult)
            .page.ecosiaPage().goToFirstResultSearch()
            .page.nightwatchjsPage().checkMainTitle()
        browser.end()
    }
}