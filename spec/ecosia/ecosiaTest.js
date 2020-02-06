module.exports = {
    'My first test': function(browser){
        browser
            .page.ecosiaPage().openEcosiaPage()
        
        browser.end()
    }
}