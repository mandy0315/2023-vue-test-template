import Stepper from '../Stepper/Stepper.vue'

describe('<Stepper />', () => {
  beforeEach(() => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Stepper, {
      props: {
        initial: 10
      }
    })
  })
  it('預設是否為數字 10', () => {
    
    cy.get('[data-test=counter]').should('have.text','10')
  })
})