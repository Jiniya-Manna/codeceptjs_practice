/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/login');
type validCompanySearchPage = typeof import('./pages/validCompanySearch');
type invalidCompanySearchPage = typeof import('./pages/invalidCompanySearch');
type invalidPage = typeof import('./pages/invalid');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, validCompanySearchPage: validCompanySearchPage, invalidCompanySearchPage: invalidCompanySearchPage, invalidPage: invalidPage }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
