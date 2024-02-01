export const config: CodeceptJS.MainConfig = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './tests/customSteps.ts',
    config: './tests/config.ts',
    claimsPage: './tests/Claims/pages/Claims.page.ts'
  },
  name: 'takehome-akko'
}