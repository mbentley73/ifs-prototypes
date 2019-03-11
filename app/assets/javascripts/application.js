/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  var autoCompleteElement = $('[data-auto-complete]')
  if (autoCompleteElement.length > 0) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: autoCompleteElement[0]
    })
  }

  // Simple show hide for pattern library components
  $('.example-tab--navigation a').on('click', function () {
    $('.example-tab').hide()
    var tab = '#' + $(this).attr('id') + '-tab'
    $(tab).show()
    return false
  })
  // Highlight js
  document.querySelectorAll('code').forEach(function (element) {
    element.innerHTML = element.innerHTML.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  })
  hljs.initHighlightingOnLoad()
})
