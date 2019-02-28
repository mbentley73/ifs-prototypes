/* global $ */

const countries = [
  'France',
  'Germany',
  'United Kingdom'
]

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()

  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#location-picker')
  })
  accessibleAutocomplete({
    element: document.querySelector('#location-picker'),
    id: 'location-picker', // To match it to the existing <label>.
    source: countries
  })
})
