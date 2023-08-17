// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('public/index.html')
})

it('clicks the Next button until we get to the last page', () => {
  // the HTML table on the page is paginated
  // can you click the "Next" button until
  // we get to the very last page?
  // button selector "[value=next]"
  cy.get('[value=next]').then(($nextbutton) => {
    while (!$nextbutton.is(':disabled')) {
      $nextbutton.click()
    }
  }) // keep clicking!

  cy.log('**confirm we are on the last page**')
  cy.get('[value=next]').should('be.disabled')
  cy.get('[value=last]').should('be.disabled')
})

// :disabled selector
// Description: Selects all elements that are disabled.
// As with other pseudo-class selectors (those that begin with a ":"), it is recommended
// to precede it with a tag name or some other selector; otherwise, the universal
// selector ("*") is implied. In other words, the bare $(':disabled') is equivalent
// to $('*:disabled'), so $('input:disabled') or similar should be used instead.

// Although their resulting selections are usually the same, the :disabled selector
// is subtly different from the [disabled] attribute selector;:disabled matches elements 
// that are actually disabled while [disabled] only checks for the existence of the disabled attribute.

// The :disabled selector should only be used for selecting HTML elements that support 
// the disabled attribute (<button>, <input>, <optgroup>, <option>, <select>, <textarea>, 
//   <menuitem>, and <fieldset>).

