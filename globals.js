module.exports = {
    getConfig: function (defConfFilePath) {
        return require(this.configurationFilesLocation + defConfFilePath)
      },
    
    url () {
        if (this.environment === 'nl') {
          return 'https://news.google.com/?hl=nl&gl=NL&ceid=NL:nl'
        }

        if (this.environment === 'pl') {
            return 'https://news.google.com/?hl=pl&gl=PL&ceid=PL:pl'
        }  
        
      },
}