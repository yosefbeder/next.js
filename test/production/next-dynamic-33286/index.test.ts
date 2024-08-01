import { nextTestSetup } from 'e2e-utils'
import { check } from 'next-test-utils'

describe('next-dynamic-33286', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('should work using browser', async () => {
    const browser = await next.browser('/')
    await browser.elementByCss('a').click()
    await check(async () => {
      return await browser.eval(
        // expect the button's background to be red
        `window.getComputedStyle(document.querySelector('button')).backgroundColor`
      )
    }, 'rgb(255, 0, 0)')
  })
})
