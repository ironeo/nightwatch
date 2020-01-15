module.exports.command = function (selectorContainsText, expectedText) {
    return this.getText(selectorContainsText, function (results) {
        console.log("results  ===============================" + results.value)
      this.assert.strictEqual(results.value, expectedText)
    })
  }
  