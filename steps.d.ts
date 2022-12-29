/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type loginPage = typeof import('./pages/login');
type validCompanySearchPage = typeof import('./pages/validCompanySearch');
type invalidCompanySearchPage = typeof import('./pages/invalidCompanySearch');
type invalidPage = typeof import('./pages/invalid');
type settingpagePage = typeof import('./pages/settingpage');
type notecreatedPage = typeof import('./pages/notecreated');
type companynotePage = typeof import('./pages/companynote');
type multipleUsersPage = typeof import('./pages/multipleUsers');
type multiuserPage = typeof import('./pages/multiuser');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, loginPage: loginPage, validCompanySearchPage: validCompanySearchPage, invalidCompanySearchPage: invalidCompanySearchPage, invalidPage: invalidPage, settingpagePage: settingpagePage, notecreatedPage: notecreatedPage, companynotePage: companynotePage, multipleUsersPage: multipleUsersPage, multiuserPage: multiuserPage }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
