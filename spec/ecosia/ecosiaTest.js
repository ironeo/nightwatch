module.exports = {
    'My first test': function(browser){
        browser
            .page.ecosiaPage().openEcosiaPage()
            .page.ecosiaPage().setSearchText('nightwatchjs')
        browser.end()
    }
}