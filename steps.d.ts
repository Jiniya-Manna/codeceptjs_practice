/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type pagesPage = typeof import('./pages/pages');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, pagesPage: pagesPage }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
