/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/login');
type validCompanySearchPage = typeof import('./pages/validCompanySearch');
type invalidCompanySearchPage = typeof import('./pages/invalidCompanySearch');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, validCompanySearchPage: validCompanySearchPage, invalidCompanySearchPage: invalidCompanySearchPage }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
