module.exports = {
    'My first test': function(browser){
        browser
            .page.ecosiaPage().openEcosiaPage()
            .page.ecosiaPage().setSearchText('nightwatchjs')
            .page.ecosiaPage().checkFirstResult('Nightwatch.js | Node.js powered End-to-End testing framework')
        browser.end()
    }
}