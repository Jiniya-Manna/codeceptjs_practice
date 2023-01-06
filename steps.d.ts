/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type beforeLoginPage = typeof import('./pages/beforeLogin');
type editgrpPage = typeof import('./pages/editgrp');
type testuploadfilePage = typeof import('./pages/testuploadfile');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, beforeLoginPage: beforeLoginPage, editgrpPage: editgrpPage, testuploadfilePage: testuploadfilePage }
  interface Methods extends PlaywrightTs {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
