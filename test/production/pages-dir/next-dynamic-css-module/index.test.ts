import { nextTestSetup } from 'e2e-utils'

describe('next-dynamic-33286', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('should be able to load the same css module with both next dynamic and import', async () => {
    const browser = await next.browser('/')
    await browser.elementByCss('a').click()

    expect(
      await browser.eval(
        `window.getComputedStyle(document.querySelector('button')).backgroundColor`
      )
    ).not.toBe('rgb(239, 239, 239)')

    expect(
      await browser.eval(
        // expect the button's background to be red
        `window.getComputedStyle(document.querySelector('button')).backgroundColor`
      )
    ).toBe('rgb(255, 0, 0)')
  })
})
